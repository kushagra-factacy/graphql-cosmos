const { gql } = require('apollo-server-express')
const typeDefs = gql`

 type AKA {
  Art_Id: [String]
  Company_Name: String
  Output_CIN: String
  Entity_Type: String
  Name_Heimdall: String
  CIN_Heimdall: String
  CIN_Websearch: String
  Website_URL: String
  Privacy_Policy_URL: String
  Legal_Name_NTT: String
  Manual_Check: String
  Comment: String
  Legal_Name: String
  Manual_Check_Review: String
  Timestamp: String
  id: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  ORG_PREP: String
  Loc8er_Flag: String
  _ts: Int
  business_news: [Business_News]
  
}
type Business_News {
Art_Id: [String]
ORG: String
published_date: String
Output_CIN: String
Brand_Name: String
Legal_Name: String
Entity_Type: String
Company_SOS: String
id: String
_rid: String
_self: String
_etag: String
_attachments: String
_ts: Int


}
type AICITE_IC {
  Art_Id: String
  title: String
  content_cl: String
  summary_of_article: String
  headline: String
  summary_IC: String
  url: String
  image: String
  published_date: String
  published_date_time: String
  Unique_date_time: Int
  Funding_Alert: String
  id: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  _ts: Int
  
}
type org {
  id: String
  Art_Id: String
  ORG: [String]
  Aka_Flag: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  Timestamp: String
  published_date: String
  content_cl: String
  published_date_time: String
  _ts: Int
}
type org_ic {
  
  Art_Id: String
  Ic_result: String
  org: String
  Factacy_BOW_Classification: String
  manual_check: String
  ic_got: String
  factacy_main_sector: String
  factacy_subsector: String
  id: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  published_date: String
  _ts: Int

}
type designation_ic {
  
  id: String
  Art_Id: String
  title: String
  date: String
  time: String
  author: [String]
  url: String
  content: String
  designation: [String]
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  _ts: Int
}

type coinuse_1 {
  id: String
  Art_Id: String
  title: String
  date: String
  time: String
  author: String
  url: String
  content: String
  designation: String
  image: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  AKA_Flag: String
  _ts: Int
  comment: String
  investee: String
  series_detected: String
  series_info: String
  Raised_info: String
  secured_amount: String
  last_info: String
  Valuation: String
  Total_raised_amount: String
  Equity_amount: String
  Debt_amount: String
  Grant_Amount: String
  vision: [String]
  
}
type  AKA_Search{
  LEI: String
  LEI_CIN: String
  LEI_COMPANY_NAME: String
  LEI_COMPANY_NAME_PREP: String
  MCA_CIN: String
  MCA_COMPANY_NAME: String
  MCA_COMPANY_NAME_PREP: String
  AKA_Brand_Name: String
  AKA_Brand_Name_PREP: String
  id: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  FACTACY_INDUSTRIAL_CLASSIFICATION: String
  _ts: Int
}

scalar EMail

type locator {
    
  id: String!
  Company_Name: String
  Website: String
  EMail: EMail
  Contact_Numbers: [String]
  Address: String
  Facebook: String
  Instagram: String
  Linkedin: String
  Twitter: String
  Medium: String
  Youtube: String
  Reddit: String
  About_Us_URL: String
  Contact_Us_URL: String
  Meta_Content: String
  Product_links: String
  Product_Headings: String
  Product_content_url: String
  About_Us_Content: String
  Contact_Us_HTML_Content: String
  Website_HTML_Content: String
  Manual_Check: String
  Comment: String
  Manual_Check_Review: String
  Timestamp: String
  Logo: String
  SVG: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  _ts: Int
  images: [String]
  associatedPeople: [Person_all]
}
type Person_all {
  Art_Id: String
  Output_CIN: String
  Company_Name: String
  Person_Name: String
  Current_Designation: String
  Previous_Designation: String
  id: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  date: String
  _ts: Int
  locator: locator
} 
scalar relation
type rel8d {
  id: String
  P_id: String
  articles: String
  CIN: String
  relation: relation
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  _ts: Int
}
type  Universal_IC{
  id: String
  Sector: String
  SubsectorLevel1: String
  SubsectorLevel2: String
  SubsectorLevel3: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  _ts: Int
}
scalar author
type art_id{
  unique_id: String
  url: String
  title: String
  content: String
  content_cl: String
  author: author
  image: String
  published_date: String
  published_date_time: String
  Timestamp: String
  id: String
  _rid: String
  _self: String
  _etag: String
  _attachments: String
  Unique_date_time: Int
  Org_Flag: String
  Designation_Flag: String
  Coinuse_Flag: String
  Esg_Flag: String
  Aicite_Flag: String
  _ts: Int
  business_news: [Business_News]
}



type Query {
    aka: [AKA]
    aka_by_id(Art_Id: String!): [AKA]

    business_news: [Business_News]
    business_news_by_id(Art_Id: String): [Business_News]

    aicite_ic: [AICITE_IC]
    aicite_ic_by_id(Art_Id: String): [AICITE_IC]
    org: [org]
    org_by_id(Art_Id: String): [org]
    org_ic: [org_ic]
    org_ic_by_id(Art_Id: String): [org_ic]
    designation_ic: [designation_ic]
    designation_ic_by_id(Art_Id: String): [designation_ic]
    coinuse_i: [coinuse_1]
    coinuse_i_by_id(Art_Id: String): [coinuse_1]
    aka_search: [AKA_Search]
    aka_search_by_id(id: String): [AKA_Search]
    locator(id: String): [locator]
    locator_by_id(id: String): [locator]
    person_all: [Person_all]
    person_all_by_id(Art_Id: String): [Person_all]
    rel8d: [rel8d]
    rel8d_by_id(id: String): [rel8d]
    universal_ic: [Universal_IC]
    universal_ic_by_id(id: String): [Universal_IC]
    art_id: [art_id]

    art_id_by_id(id: String): [art_id]
    
    
   
}



`
module.exports = {typeDefs}