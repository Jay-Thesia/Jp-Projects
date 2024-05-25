const fs = require('fs');
const csv = require('csv-parser');
const {
  axiosSourceHubspot,
  axiosTargetHubspot,
} = require('./config/axios.config');
const { contactJoiSchema } = require('./validation/contact.validation');
const { logger } = require('./config/logger.config');
const { splitIntoChunk } = require('./helpers/chunk.helper');
const readCSVFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const resultsCsv = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        resultsCsv.push(data);
      })
      .on('end', () => {
        resolve(resultsCsv);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
// const MergeContact = require("./mergecontact.model.js");
//new contact 2000 from source to target

const handleMerge = async () => {
  const csvData = await readCSVFile(
    './Contact Merge Files for Izzy/01-FD8.csv'
  );
  // console.log("🚀 ~ csvData:", csvData.slice(0, 2000));

  //search in the new email prod portal

  let emailArray = [];
  let customerNumberArray = [];
  for (const currRecord of csvData.slice(0, 2000)) {
    const validation = contactJoiSchema.validate({
      oldEmail: currRecord['Old Email or Customer Number'],
    });

    if (validation.error) {
      customerNumberArray.push(currRecord['Old Email or Customer Number']);
      emailArray.push(currRecord['New Email']);
      // logger.warn(
      //   `Not email Contact validation failed :: error - ${validation.error.message},Customer ::: ${customerNumberArray} ,emailArray ::: ${emailArray}`
      // );
    } else {
      emailArray.push(
        currRecord['New Email'],
        currRecord['Old Email or Customer Number']
      );

      // logger.warn(
      //   `Customer Number Contact validation newEmail :::: ${emailArray} olderEmail :::: ${currRecord["Old Email or Customer Number"]} `
      // );
    }
  }
  const data = await getNewEmailContact(
    [...new Set(customerNumberArray)],
    [...new Set(emailArray)]
  );
};

const getNewEmailContact = async (crdbArray, emailArraydbquery) => {
  try {
    logger.verbose(
      `🚀 ~ getContactSearch ~ emailArray: ${emailArraydbquery.length}`
    );
    logger.verbose(
      `🚀 ~ getContactSearch ~ CustomerNumber:, ${crdbArray.length}`
    );

    //db query 100 at time email

    const emailBatches = await splitIntoChunk(emailArraydbquery, 100);
    const crBatches = await splitIntoChunk(crdbArray, 100);
    // for (const currBatch of emailBatches) {
    //   for (const currNewEmail of currBatch) {
    //     console.log("currNewEmail ::: lll ", currNewEmail);
    //     //SO:search in HS with email
    //     const searchSourceContactProperty = {
    //       limit: 100,
    //       properties: [
    //         "salesforce_id",
    //         "email",
    //         "firstname",
    //         "lastname",
    //         "hs_additional_emails",
    //         "wb__contact_affiliation",
    //         "is_backstage_user",
    //         "is_starnow_user",
    //         "is_employer",
    //         "backstage_is_agent",
    //         "starnow_member_type",
    //         "is_mandy_user",
    //         "voice123_account_manager",
    //         "starnow_biz_dev_owner",
    //         "backstage_biz_dev__legacy_owner_",
    //         "mandy_biz_dev_owner",
    //         "employer_posted_job_timestamp",
    //         "employer_job_title",
    //         "hubspot_owner_id",
    //         "account_manager",
    //         "additional_biz_dev_owner",
    //         "business_unit_optout_507802",
    //         "hs_email_optout_60683362", //FIXME: for prod hs_
    //         "hs_email_optout_60683441",
    //         "hs_email_optout_60683531",
    //       ], //20+ property
    //       filterGroups: [
    //         {
    //           filters: [
    //             {
    //               value: currNewEmail.toLowerCase(),
    //               propertyName: "email",
    //               operator: "EQ",
    //             },
    //           ],
    //         },
    // {
    //   filters: [
    //     {
    //       value:
    //         sourceSearchContact.results[0].properties.email.toLowerCase(),
    //       propertyName: 'hs_addition_email',
    //       operator: 'EQ',
    //     },
    //   ],
    // },
    //       ],
    //     };
    //     const { data: sourceSearchContact } = await axiosSourceHubspot.post(
    //       `/crm/v3/objects/contacts/search`,
    //       searchSourceContactProperty
    //     );

    //     //update sourceHSId in db properties = all the condition proeprty 20 +email,salesforce+hs_obejct_id

    //     //SO:association get contact with CR properties, license_number,salesforceId,email_,email
    //     //FIXME: below cr hubspotId in api
    //     const { data: contactAssociation } = await axiosSourceHubspot.get(
    //       `/crm/v3/objects/contacts/${sourceSearchContact.results[0].id}?associations=2-19836224`
    //     );

    //     //search in source CR with hs_object_id

    //     const searchSourceCRProperty = {
    //       limit: 100,
    //       properties: ["license_number", "email", "salesforce_id", "email_"],
    //       filterGroups: [
    //         {
    //           filters: [
    //             {
    //               value:
    //                 contactAssociation.associations[
    //                   "p200838_customer_registrations"
    //                 ].results[0].id.toLowerCase(),
    //               propertyName: "hs_object_id",
    //               operator: "EQ",
    //             },
    //           ],
    //         },
    //       ],
    //     };
    //     const { data: sourceSearchCR } = await axiosSourceHubspot.post(
    //       `/crm/v3/objects/2-19836224/search`,
    //       searchSourceCRProperty
    //     );

    //     //update sourceCRId in db
    //     //Target:search in HS with email

    //     let targetContactId;
    //     let targetCRId;

    //     console.log("currNewEmail.toLowerCase(),", currNewEmail.toLowerCase());
    //     const searchTargetContactProperty = {
    //       limit: 100,
    //       properties: [
    //         "salesforce_id",
    //         "email",
    //         "firstname",
    //         "lastname",
    //         "hs_additional_emails",
    //         "wb__contact_affiliation",
    //         "is_backstage_user",
    //         "is_starnow_user",
    //         "is_employer",
    //         "backstage_is_agent",
    //         "starnow_member_type",
    //         "is_mandy_user",
    //         "voice123_account_manager",
    //         "starnow_biz_dev_owner",
    //         "backstage_biz_dev__legacy_owner_",
    //         "mandy_biz_dev_owner",
    //         "employer_posted_job_timestamp",
    //         "employer_job_title",
    //         "hubspot_owner_id",
    //         "account_manager",
    //         "additional_biz_dev_owner",
    //         "business_unit_optout_507802",
    //         "hs_email_optout_60683362", //FIXME: for prod hs_
    //         "hs_email_optout_60683441",
    //         "hs_email_optout_60683531",
    //       ], //20+ property
    //       filterGroups: [
    //         {
    //           filters: [
    //             {
    //               value: currNewEmail.toLowerCase(),
    //               propertyName: "email",
    //               operator: "EQ",
    //             },
    //           ],
    //         },
    // {
    //   filters: [
    //     {
    //       value:
    //         currNewEmail.toLowerCase(),
    //       propertyName: 'hs_addition_email',
    //       operator: 'EQ',
    //     },
    //   ],
    // },
    //         // {
    //         //   filters: {
    //         //     value:
    //         //       sourceSearchContact.results[0].properties.salesforce_id.toLowerCase(),
    //         //     propertyName: "salesforce_id",
    //         //     operator: "EQ",
    //         //   },
    //         // },
    //       ],
    //     };
    //     const { data: targetContact } = await axiosTargetHubspot.post(
    //       `/crm/v3/objects/contacts/search`,
    //       searchTargetContactProperty
    //     );

    //     console.log(
    //       "targetContact",
    //       JSON.stringify(targetContact.results, null, 2)
    //     );

    //     //Target:search license_number with in CR
    //     const searchTargetCRProperty = {
    //       limit: 100,
    //       properties: ["license_number", "email", "salesforce_id", "email_"],
    //       filterGroups: [
    //         {
    //           filters: [
    //             {
    //               value:
    //                 sourceSearchCR.results[0].properties.license_number.toLowerCase(),
    //               propertyName: "license_number",
    //               operator: "EQ",
    //             },
    //           ],
    //         },
    //       ],
    //     };
    //     const { data: targetSearchCR } = await axiosTargetHubspot.post(
    //       `/crm/v3/objects/2-29892240/search`,
    //       searchTargetCRProperty
    //     );

    //     if (targetSearchCR.total === 0) {
    //       const crCreatePayload = {
    //         properties: {
    //           order_id: 1,
    //           license_number:
    //             sourceSearchCR.results[0].properties.license_number,

    //           email: sourceSearchCR.results[0].properties.email,
    //           email_: sourceSearchCR.results[0].properties.email_,
    //           salesforce_id: sourceSearchCR.results[0].properties.salesforce_id,
    //         },
    //       };
    //       const { data: targetCRCreate } = await axiosTargetHubspot.post(
    //         `/crm/v3/objects/2-29892240`,
    //         crCreatePayload
    //       );

    //       targetCRId = targetCRCreate.id;
    //     } else {
    //       targetCRId = targetSearchCR.results[0].id;
    //     }

    //     //not get create in TARGET and update the TargetCRId
    //     //update TargetHSId in db
    //     let targetSourceContact = sourceSearchContact;
    //     if (targetContact.total === 0) {
    //       delete targetSourceContact.results[0].properties.createdate;
    //       delete targetSourceContact.results[0].properties.lastmodifieddate;
    //       delete targetSourceContact.results[0].properties.hs_object_id;

    //       let value1 =
    //         targetSourceContact.results[0].properties.hs_email_optout_60683362;
    //       let value2 =
    //         targetSourceContact.results[0].properties.hs_email_optout_60683441;
    //       let value3 =
    //         targetSourceContact.results[0].properties.hs_email_optout_60683531;

    //       delete targetSourceContact.results[0].properties
    //         .hs_email_optout_60683441;
    //       delete targetSourceContact.results[0].properties
    //         .hs_email_optout_60683362;
    //       delete targetSourceContact.results[0].properties
    //         .hs_email_optout_60683531;
    //       delete targetSourceContact.results[0].properties.hubspot_owner_id;
    //       delete targetSourceContact.results[0].properties.hs_additional_emails;

    //       const contactCreatePayload = {
    //         properties: {
    //           ...targetSourceContact.results[0].properties,
    //           ["email_optout_60683362"]: value1,
    //           ["email_optout_60683441"]: value2,
    //           ["email_optout_60683531"]: value3,
    //           hubspot_owner:
    //             targetSourceContact.results[0].properties.hubspot_owner_id,
    //           is_employer:
    //             targetSourceContact.results[0].properties.is_employer == false
    //               ? "No"
    //               : targetSourceContact.results[0].properties.is_employer ==
    //                 true
    //               ? "Yes"
    //               : undefined,
    //         },
    //         associations: [
    //           {
    //             to: {
    //               id: targetCRId,
    //             },
    //             types: [
    //               {
    //                 associationCategory: "USER_DEFINED",
    //                 associationTypeId: 35,
    //               },
    //             ],
    //           },
    //         ],
    //       };
    //       const { data: targetContact } = await axiosTargetHubspot.post(
    //         `/crm/v3/objects/contacts`,
    //         contactCreatePayload
    //       );
    //       console.log("first", targetContact);

    //       targetContactId = targetContact.id;
    //     } else {
    //       targetContactId = targetContact.results[0].id;
    //     }

    //     //association targetCR and targetContactId

    //     logger.info(
    //       JSON.stringify({
    //         salesforceId:
    //           sourceSearchContact.results[0].properties.salesforce_id,
    //         sourceContactId: sourceSearchContact.results[0].id,
    //         sourceCRId:
    //           contactAssociation.associations["p200838_customer_registrations"]
    //             .results[0].id,
    //         targetContactId: targetContactId,
    //         targetCRId: targetCRId,
    //         email: sourceSearchContact.results[0].properties.email,
    //         license_number: sourceSearchCR.results[0].properties.license_number,
    //         sourceCRDump: sourceSearchCR.results[0],
    //         sourceContactDump: sourceSearchContact.results[0],
    //       })
    //     );
    //     break;
    //   }
    //   break;
    // }

    //NOTE: part 2

    for (const currCrBatch of crBatches) {
      for (const oldEamilORCR of currCrBatch) {
        console.log('oldEamilORCR: crr in second loop ', oldEamilORCR);
        //db search if yes return sourcceCRId,contactCrId
        //   const existCRorEmail = MergeContact.findOne({
        //     $OR: [{ email: oldEamilORCR }, { license_number: oldEamilORCR }],
        //   });
        //   if (existCRorEmail.targetCRId && existCRorEmail.targetContactId) {
        //     continue;
        //   }

        //Target: license_number search

        let targetCRId;

        const searchTargetCRProperty = {
          limit: 100,
          properties: ['license_number', 'email', 'salesforce_id', 'email_'],
          filterGroups: [
            {
              filters: [
                {
                  value: oldEamilORCR.toLowerCase(),
                  propertyName: 'license_number',
                  operator: 'EQ',
                },
              ],
            },
          ],
        };

        //target cr search
        const { data: targetSearchCR } = await axiosTargetHubspot.post(
          `/crm/v3/objects/2-29892240/search`,
          searchTargetCRProperty
        );

        const searchSourceCRProperty = {
          limit: 100,
          properties: ['license_number', 'email', 'salesforce_id', 'email_'],
          filterGroups: [
            {
              filters: [
                {
                  value: oldEamilORCR.toLowerCase(),
                  propertyName: 'license_number',
                  operator: 'EQ',
                },
              ],
            },
          ],
        };
        const { data: sourceSearchCR } = await axiosSourceHubspot.post(
          `/crm/v3/objects/2-19836224/search`,
          searchSourceCRProperty
        );

        if (targetSearchCR.total === 0) {
          const crCreatePayload = {
            properties: {
              license_number:
                sourceSearchCR.results[0].properties.license_number,
              email: sourceSearchCR.results[0].properties.email,
              email_: sourceSearchCR.results[0].properties.email_,
              salesforce_id: sourceSearchCR.results[0].properties.salesforce_id,
            },
          };

          //create cr in target
          const { data: targetCRCreate } = await axiosTargetHubspot.post(
            `/crm/v3/objects/2-29892240`,
            crCreatePayload
          );

          targetCRId = targetCRCreate.id;
        } else {
          targetCRId = targetSearchCR.results[0].id;
        }

        //SO: crId thi search in source get associated contact
        const { data: contactAssociation } = await axiosSourceHubspot.get(
          `/crm/v3/objects/2-19836224/${sourceSearchCR.results[0].id}?associations=contacts`
        );

        const searchSourceContactProperty = {
          limit: 100,
          properties: [
            'salesforce_id',
            'email',
            'firstname',
            'lastname',
            'hs_additional_emails',
            'wb__contact_affiliation',
            'is_backstage_user',
            'is_starnow_user',
            'is_employer',
            'backstage_is_agent',
            'starnow_member_type',
            'is_mandy_user',
            'voice123_account_manager',
            'starnow_biz_dev_owner',
            'backstage_biz_dev__legacy_owner_',
            'mandy_biz_dev_owner',
            'employer_posted_job_timestamp',
            'employer_job_title',
            'hubspot_owner_id',
            'account_manager',
            'additional_biz_dev_owner',
            'business_unit_optout_507802',
            'hs_email_optout_60683362', //FIXME: for prod hs_
            'hs_email_optout_60683441',
            'hs_email_optout_60683531',
          ], //20+ property
          filterGroups: [
            {
              filters: [
                {
                  value:
                    contactAssociation?.associations[
                      'contacts'
                    ]?.results[0].id.toLowerCase(),
                  propertyName: 'hs_object_id',
                  operator: 'EQ',
                },
              ],
            },
          ],
        };
        const { data: sourceSearchContact } = await axiosSourceHubspot.post(
          `/crm/v3/objects/contacts/search`,
          searchSourceContactProperty
        );

        //target contact search

        const searchTargetContactProperty = {
          limit: 100,
          properties: ['email', 'salesforce_id'], //20+ property
          filterGroups: [
            {
              filters: [
                {
                  value:
                    sourceSearchContact.results[0].properties.email.toLowerCase(),
                  propertyName: 'email',
                  operator: 'EQ',
                },
              ],
            },
            {
              filters: [
                {
                  value:
                    sourceSearchContact.results[0].properties.email.toLowerCase(),
                  propertyName: 'hs_addition_email',
                  operator: 'EQ',
                },
              ],
            },
            {
              filters: [
                {
                  value:
                    sourceSearchContact.results[0].properties.salesforce_id.toLowerCase(),
                  propertyName: 'salesforce_id',
                  operator: 'EQ',
                },
              ],
            },
          ],
        };
        const { data: targetContact } = await axiosTargetHubspot.post(
          `/crm/v3/objects/contacts/search`,
          searchTargetContactProperty
        );
        console.log('targetContact: ', JSON.stringify(targetContact, null, 2));

        //create contact in target
        let targetContactId;
        const targetSourceContact = sourceSearchCR;
        //   let targetCRId;
        if (targetContact.total == 0) {
          delete targetSourceContact.results[0].properties.createdate;
          delete targetSourceContact.results[0].properties.lastmodifieddate;
          delete targetSourceContact.results[0].properties.hs_object_id;

          let value1 =
            targetSourceContact.results[0].properties.hs_email_optout_60683362;
          let value2 =
            targetSourceContact.results[0].properties.hs_email_optout_60683441;
          let value3 =
            targetSourceContact.results[0].properties.hs_email_optout_60683531;

          delete targetSourceContact.results[0].properties
            .hs_email_optout_60683441;
          delete targetSourceContact.results[0].properties
            .hs_email_optout_60683362;
          delete targetSourceContact.results[0].properties
            .hs_email_optout_60683531;
          delete targetSourceContact.results[0].properties.hubspot_owner_id;
          delete targetSourceContact.results[0].properties.hs_additional_emails;

          const contactCreatePayload = {
            properties: {
              ...targetSourceContact.results[0].properties,
              ['email_optout_60683362']: value1,
              ['email_optout_60683441']: value2,
              ['email_optout_60683531']: value3,
              hubspot_owner:
                targetSourceContact.results[0].properties.hubspot_owner_id,
              is_employer:
                targetSourceContact.results[0].properties.is_employer == false
                  ? 'No'
                  : targetSourceContact.results[0].properties.is_employer ==
                    true
                  ? 'Yes'
                  : undefined,
            },

            associations: [
              {
                to: {
                  id: targetCRId,
                },
                types: [
                  {
                    associationCategory: 'USER_DEFINED',
                    associationTypeId: 35,
                  },
                ],
              },
            ],
          };
          const { data: targetContact } = await axiosTargetHubspot.post(
            `/crm/v3/objects/contacts`,
            contactCreatePayload
          );

          targetContactId = targetContact.id;
        } else {
          targetContactId = targetContact.results[0].id;
        }

        logger.verbose(
          JSON.stringify({
            salesforceId:
              sourceSearchContact.results[0].properties.salesforce_id,
            sourceContactId: sourceSearchContact.results[0].id,
            sourceCRId: sourceSearchCR.results[0].id,
            targetContactId: targetContactId,
            targetCRId,
            email: sourceSearchContact.results[0].properties.email,
            license_number: sourceSearchCR.results[0].properties.license_number,
            sourceCRDump: sourceSearchCR.results[0],
            sourceContactDump: sourceSearchContact.results[0],
          })
        );

        //association targetCR and targetContactId
      }
    }
  } catch (error) {
    console.log('error :>> ', error);
  }
};

handleMerge();
// const fs = require("fs");
// const csv = require("csv-parser");
// const {
//   axiosSourceHubspot,
//   axiosTargetHubspot,
// } = require("./config/axios.config");
// const { contactJoiSchema } = require("./validation/contact.validation");
// const { logger } = require("./config/logger.config");
// const { splitIntoChunk } = require("./helpers/chunk.helper");
// const readCSVFile = (filePath) => {
//   return new Promise((resolve, reject) => {
//     const resultsCsv = [];
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on("data", (data) => {
//         resultsCsv.push(data);
//       })
//       .on("end", () => {
//         resolve(resultsCsv);
//       })
//       .on("error", (error) => {
//         reject(error);
//       });
//   });
// };

// const handleMerge = async () => {
//   const csvData = await readCSVFile(
//     "./Contact Merge Files for Izzy/01-FD8.csv"
//   );
//   // console.log("🚀 ~ csvData:", csvData.slice(0, 2000));

//   //search in the new email prod portal

//   let emailArray = [];
//   let customerNumberArray = [];
//   for (const currRecord of csvData.slice(0, 2000)) {
//     const validation = contactJoiSchema.validate({
//       oldEmail: currRecord["Old Email or Customer Number"],
//     });

//     if (validation.error) {
//       customerNumberArray.push(currRecord["Old Email or Customer Number"]);
//       emailArray.push(currRecord["New Email"]);
//       // logger.warn(
//       //   `Not email Contact validation failed :: error - ${validation.error.message},Customer ::: ${customerNumberArray} ,emailArray ::: ${emailArray}`
//       // );
//     } else {
//       emailArray.push(
//         currRecord["New Email"],
//         currRecord["Old Email or Customer Number"]
//       );

//       // logger.warn(
//       //   `Customer Number Contact validation newEmail :::: ${emailArray} olderEmail :::: ${currRecord["Old Email or Customer Number"]} `
//       // );
//     }
//   }
//   const data = await getContactSearch(
//     [...new Set(customerNumberArray)],
//     [...new Set(emailArray)]
//   );
// };

// const getContactSearch = async (CustomerNumber, emailArray) => {
//   logger.verbose(`🚀 ~ getContactSearch ~ emailArray: ${emailArray.length}`);
//   logger.verbose(
//     `🚀 ~ getContactSearch ~ CustomerNumber:, ${CustomerNumber.length}`
//   );

//   try {
//     let newEmail;
//     let oldEmail;

//     if (emailArray.length == 2) {
//       newEmail = emailArray[0];
//       oldEmail = emailArray[1];
//     } else if (emailArray.length == 1) {
//       newEmail = emailArray[0];
//     }

//     const batches = await splitIntoChunk(CustomerNumber, 100);
//     const emailBatch = await splitIntoChunk(emailArray, 100);
//     let count = 1;
//     for (const batch of batches) {
//       console.log("count11111", count);
//       count++;
//       const searchCustomerRegister = {
//         properties: ["license_number", "salesforce_id", "email"],
//         limit: 100,
//         filterGroups: [
//           {
//             filters: [
//               {
//                 values: batch.map((curr) => curr.toLowerCase()),
//                 propertyName: "license_number",
//                 operator: "IN",
//               },
//             ],
//           },
//         ],
//       };

//       //search in the prod
//       const { data: crData } = await axiosSourceHubspot.post(
//         `/crm/v3/objects/2-19836224/search`,
//         searchCustomerRegister
//       );

//       let contactData;
//       for (let currCRrecord of crData.results) {
//         // NOTE: part 1 associated contact find from CR
//         let crID = currCRrecord.id;

//         console.log(
//           "🚀 ~ getContactSearch ~ crID:",
//           currCRrecord.properties.license_number
//         );
//         //get CR FIXME: cr id
//         const { data: crGetData } = await axiosSourceHubspot.get(
//           `/crm/v3/objects/2-19836224/${crID}?associations=contacts`
//         );

//         let contactHSId;
//         if (
//           crGetData?.associations &&
//           crGetData?.associations["contacts"]?.results[0]
//         ) {
//           contactHSId = crGetData?.associations["contacts"]?.results[0].id;
//         }

//         const searchPayload = {
//           limit: 100,
//           properties: [
//             "email",
//             "firstname",
//             "lastname",
//             "hs_additional_emails",
//             "wb__contact_affiliation",
//             "is_backstage_user",
//             "is_starnow_user",
//             "is_employer",
//             "backstage_is_agent",
//             "starnow_member_type",
//             "is_mandy_user",
//             "voice123_account_manager",
//             "starnow_biz_dev_owner",
//             "backstage_biz_dev__legacy_owner_",
//             "mandy_biz_dev_owner",
//             "employer_posted_job_timestamp",
//             "employer_job_title",
//             "hubspot_owner_id",
//             "account_manager",
//             "additional_biz_dev_owner",
//             "business_unit_optout_507802",
//             "hs_email_optout_60683362", //FIXME: for prod hs_
//             "hs_email_optout_60683441",
//             "hs_email_optout_60683531",
//           ],
//           filterGroups: [
//             {
//               filters: [
//                 {
//                   value: contactHSId,
//                   propertyName: "hs_object_id",
//                   operator: "EQ",
//                 },
//               ],
//             },
//           ],
//         };

//         if (!contactHSId) {
//           continue;
//         }

//         // search two contacts
//         const { data: contactData } = await axiosSourceHubspot.post(
//           `/crm/v3/objects/contacts/search`,
//           searchPayload
//         );

//         let searchCRtarget = {
//           properties: ["license_number"],
//           limit: 100,
//           filterGroups: [
//             {
//               filters: [
//                 {
//                   value: currCRrecord.properties.license_number.toLowerCase(),
//                   propertyName: "license_number",
//                   operator: "EQ",
//                 },
//               ],
//             },
//           ],
//         };

//         const { data: crTargetData } = await axiosTargetHubspot.post(
//           `/crm/v3/objects/2-29892240/search`,
//           searchCRtarget
//         );

//         let payloadContact = { inputs: [] };
//         let payloadUpdateContact = { inputs: [] };
//         for (let curr of contactData.results) {
//           delete curr.id;
//           delete curr.createdAt;
//           delete curr.updatedAt;
//           delete curr.properties.createdate;
//           delete curr.properties.lastmodifieddate;
//           delete curr.properties.hs_object_id;

//           let value1 = curr.properties.hs_email_optout_60683362;
//           let value2 = curr.properties.hs_email_optout_60683441;
//           let value3 = curr.properties.hs_email_optout_60683531;

//           delete curr.properties.hs_email_optout_60683362, //FIXME: for prod hs_
//             delete curr.properties.hs_email_optout_60683441,
//             delete curr.properties.hs_email_optout_60683531;
//           delete curr.properties.hubspot_owner_id;
//           delete curr.properties.hs_additional_emails;

//           payloadContact.inputs.push({
//             properties: {
//               ...curr.properties,
//               ["email_optout_60683362"]: value1,
//               ["email_optout_60683441"]: value2,
//               ["email_optout_60683531"]: value3,
//               hubspot_owner: curr.properties.hubspot_owner_id,
//               is_employer:
//                 curr.properties.is_employer == false
//                   ? "No"
//                   : curr.properties.is_employer == true
//                   ? "Yes"
//                   : undefined,
//             },
//             associations: [
//               {
//                 types: [
//                   {
//                     associationCategory: "USER_DEFINED",
//                     associationTypeId: 35,
//                   },
//                 ],
//                 to: {
//                   id: crTargetData.results[0].id,
//                 },
//               },
//             ],
//           });
//         }

//         console.log(
//           "🚀 ~ getContactSearch ~ contactData:",
//           JSON.stringify(payloadContact, null, 2)
//         );

//         // old email add

//         if (payloadContact.inputs[0].properties.email) {
//           const searchTargetPayload = {
//             limit: 100,
//             properties: ["email"],
//             filterGroups: [
//               {
//                 filters: [
//                   {
//                     value: payloadContact.inputs[0].properties.email,
//                     propertyName: "email",
//                     operator: "EQ",
//                   },
//                 ],
//               },
//             ],
//           };

//           const { data: contactTargetData } = await axiosTargetHubspot.post(
//             `/crm/v3/objects/contacts/search`,
//             searchTargetPayload
//           );
//           console.log(
//             "🚀 ~ getContactSearch ~ contactTargetData:",
//             contactTargetData
//           );
//           let updateAssociationArrayContact = { inputs: [] };
//           if (contactTargetData.total >= 1) {
//             let updateAssoPayload = {
//               to: {
//                 id: parseInt(contactTargetData.results[0].id),
//               },
//               from: {
//                 id: parseInt(crTargetData.results[0].id),
//               },
//               type: "customer_registrations_to_contact",
//             };
//             updateAssociationArrayContact.inputs.push(updateAssoPayload);

//             let assocationContact = await axiosTargetHubspot.post(
//               `/crm/v3/associations/2-29892240/contact/batch/create`,
//               updateAssociationArrayContact
//             );
//             console.log(
//               "🚀 ~ getContactSearch ~ assocationContact:",
//               assocationContact
//             );

//             const { data: targetContact } = axiosTargetHubspot.post(
//               `/crm/v3/objects/contacts/batch/update`,
//               payloadUpdateContact
//             );
//             continue;
//           }

//           try {
//             // const { data: targetContact } = axiosTargetHubspot.post(
//             //   `/crm/v3/objects/contacts/batch/create`,
//             //   payloadContact
//             // );
//             // console.log(
//             //   "🚀 ~ getContactSearch ~ targetContact:",
//             //   targetContact
//             // );
//           } catch (error) {
//             console.log("error", error);
//           }
//         }
//       }

//       // NOTE: create CR with CR number
//       let payload = { inputs: [] };
//       for (let curr of crData.results) {
//         delete curr.id;
//         delete curr.createdAt;
//         delete curr.updatedAt;
//         delete curr.properties.hs_createdate;
//         delete curr.properties.hs_lastmodifieddate;
//         delete curr.properties.hs_object_id;

//         payload.inputs.push(curr);
//       }

//       console.log("payload", JSON.stringify(payload, null, 2));

//       // create in test portal
//       const { data: crTargetData } = await axiosTargetHubspot.post(
//         `/crm/v3/objects/2-29892240/batch/create`,
//         payload
//       );

//       //NEW CONTACTTTTTTTTTTTTTTTTTTTTTTTT

//       // const batchesContact = await splitIntoChunk(emailArray, 100);
//       // for (const batch of batchesContact) {
//       //   console.log("🚀 ~ getContactSearch ~ batch:", batch.length);
//       //   const searchTargetPayload = {
//       //     limit: 100,
//       //     properties: ["email"],
//       //     filterGroups: [
//       //       {
//       //         filters: [
//       //           {
//       //             values: batch.map((curr) => curr.toLowerCase()),
//       //             propertyName: "email",
//       //             operator: "IN",
//       //           },
//       //         ],
//       //       },

//       //       // {
//       //       //   filters: [
//       //       //     {
//       //       //       value: contactHSId,
//       //       //       propertyName: "hs_object_id",
//       //       //       operator: "EQ",
//       //       //     },
//       //       //   ],
//       //       // },
//       //     ],
//       //   };

//       //   //search two contacts
//       //   const { data: contactTargetData } = await axiosTargetHubspot.post(
//       //     `/crm/v3/objects/contacts/search`,
//       //     searchTargetPayload
//       //   );

//       //   let emailArrayTargetBatch = contactTargetData.results.map((curr) =>
//       //     curr.properties.email.toLowerCase()
//       //   );

//       //   const batchnew = await batch.filter((currPro) => {
//       //     const isEmailIncluded = emailArrayTargetBatch.includes(
//       //       currPro.toLowerCase()
//       //     );
//       //     console.log("curr email", !isEmailIncluded, currPro);

//       //     if (
//       //       currPro ==
//       //       "x+digitaldogscasting.at.gmail.com@fixtures.backstage.com"
//       //     ) {
//       //       return false;
//       //     }
//       //     return !isEmailIncluded;
//       //   });

//       //   console.log("batch.length after filter", batchnew.length, batch.length);

//       //   if (batchnew.length > 0) {
//       //     const searchPayload = {
//       //       limit: 100,
//       //       properties: [
//       //         "email",
//       //         "firstname",
//       //         "lastname",
//       //         "hs_additional_emails",
//       //         "wb__contact_affiliation",
//       //         "is_backstage_user",
//       //         "is_starnow_user",
//       //         "is_employer",
//       //         "backstage_is_agent",
//       //         "starnow_member_type",
//       //         "is_mandy_user",
//       //         "voice123_account_manager",
//       //         "starnow_biz_dev_owner",
//       //         "backstage_biz_dev__legacy_owner_",
//       //         "mandy_biz_dev_owner",
//       //         "employer_posted_job_timestamp",
//       //         "employer_job_title",
//       //         "hubspot_owner_id",
//       //         "account_manager",
//       //         "additional_biz_dev_owner",
//       //         "business_unit_optout_507802",
//       //         "hs_email_optout_60683362", //FIXME: for prod hs_
//       //         "hs_email_optout_60683441",
//       //         "hs_email_optout_60683531",
//       //       ],
//       //       filterGroups: [
//       //         {
//       //           filters: [
//       //             {
//       //               values: batchnew.map((curr) => curr.toLowerCase()),
//       //               propertyName: "email",
//       //               operator: "IN",
//       //             },
//       //           ],
//       //         },
//       //         // {
//       //         //   filters: [
//       //         //     {
//       //         //       values: batchnew,
//       //         //       propertyName: "hs_additional_emails",
//       //         //       operator: "IN",
//       //         //     },
//       //         //   ],
//       //         // },
//       //         // {
//       //         //   filters: [
//       //         //     {
//       //         //       value: contactHSId,
//       //         //       propertyName: "hs_object_id",
//       //         //       operator: "EQ",
//       //         //     },
//       //         //   ],
//       //         // },
//       //       ],
//       //     };

//       //     //search two contacts

//       //     const { data: contactSoourceData } = await axiosSourceHubspot.post(
//       //       `/crm/v3/objects/contacts/search`,
//       //       searchPayload
//       //     );

//       //     let payloadContact = { inputs: [] };
//       //     for (const curr of contactSoourceData.results) {
//       //       delete curr.id;
//       //       delete curr.createdAt;
//       //       delete curr.updatedAt;
//       //       delete curr.properties.createdate;
//       //       delete curr.properties.lastmodifieddate;
//       //       delete curr.properties.hs_object_id;

//       //       let value1 = curr.properties.hs_email_optout_60683362;
//       //       let value2 = curr.properties.hs_email_optout_60683441;
//       //       let value3 = curr.properties.hs_email_optout_60683531;

//       //       delete curr.properties.hs_email_optout_60683362, //FIXME: for prod hs_
//       //         delete curr.properties.hs_email_optout_60683441,
//       //         delete curr.properties.hs_email_optout_60683531;
//       //       delete curr.properties.hubspot_owner_id;
//       //       delete curr.properties.hs_additional_emails;

//       //       payloadContact.inputs.push({
//       //         properties: {
//       //           ...curr.properties,
//       //           ["email_optout_60683362"]: value1,
//       //           ["email_optout_60683441"]: value2,
//       //           ["email_optout_60683531"]: value3,
//       //           hubspot_owner: curr.properties.hubspot_owner_id,
//       //           is_employer:
//       //             curr.properties.is_employer == false
//       //               ? "No"
//       //               : curr.properties.is_employer == true
//       //               ? "Yes"
//       //               : undefined,
//       //         },
//       //       });
//       //     }

//       //     console.log(
//       //       "🚀 ~ getContactSearch ~ contactData:",
//       //       JSON.stringify(payloadContact, null, 2)
//       //     );

//       //     try {
//       //       const { data: targetContact } = axiosTargetHubspot.post(
//       //         `/crm/v3/objects/contacts/batch/create`,
//       //         payloadContact
//       //       );

//       //       console.log("targetContact.results.length", targetContact);
//       //     } catch (error) {
//       //       console.log("error", error.message);
//       //     }
//       //   }
//       // }
//     }

//     // NOTE:email Cr add
//     // for (const currEmail of batches) {
//     //   const searchCustomerRegister = {
//     //     properties: ["license_number", "salesforce_id", "email"],
//     //     limit: 100,
//     //     filterGroups: [
//     //       {
//     //         filters: [
//     //           {
//     //             values: currEmail.map((curr) => curr.toLowerCase()),
//     //             propertyName: "email",
//     //             operator: "IN",
//     //           },
//     //         ],
//     //       },
//     //     ],
//     //   };

//     //   //search in the prod
//     //   const { data: crData } = await axiosSourceHubspot.post(
//     //     `/crm/v3/objects/2-19836224/search`,
//     //     searchCustomerRegister
//     //   );

//     //   let payload = { inputs: [] };
//     //   for (let curr of crData.results) {
//     //     delete curr.id;
//     //     delete curr.createdAt;
//     //     delete curr.updatedAt;
//     //     delete curr.properties.hs_createdate;
//     //     delete curr.properties.hs_lastmodifieddate;
//     //     delete curr.properties.hs_object_id;

//     //     payload.inputs.push(curr);
//     //   }

//     //   console.log("payload", JSON.stringify(payload, null, 2));

//     //   // create in test portal
//     //   const { data: crTargetData } = await axiosTargetHubspot.post(
//     //     `/crm/v3/objects/2-29892240/batch/create`,
//     //     payload
//     //   );
//     // }
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// handleMerge();
