/// <reference types="cypress" />

const containerSelector =
  "div[class^=ListingsListstyle__AgentContainerWrapper]";
const titleSelector = "div[class^=AgentSpecialistDesktopCarouselstyle__Title]";
const subTitleSelector =
  "div[class^=AgentSpecialistDesktopCarouselstyle__SubTitle]";
const agentNameSelector = "a[class^=AgentSpecialistCardstyle__Name]";
// TODO: find agency name
const agencyNameSelector = "div[class^=AgentSpecialistCardstyle__Organization";
const saleAndRentSelector =
  "div[class^=AgentSpecialistCardstyle__ListingsCount]";
const phoneNumberSelector = "div[class^AgentSpecialistCardstyle__PhoneNumber]";

const AREA_AGENTS_DATA = [
  {
    name: "Daniel Yong",
    contact: "+60163375377",
    agency: "Dutama Properties",
    channelCounts: { sale: 177, rent: 25 },
  },
  {
    name: "Elsis Liew",
    contact: "+60189880204",
    agency: "Propnex Realty Sdn. Bhd.",
    channelCounts: { sale: 13, rent: 8 },
  },
  {
    name: "Sylvia Chin",
    contact: "+60163231471",
    agency: "Propnex Realty Sdn. Bhd.",
    channelCounts: { sale: 37, rent: 43 },
  },
  {
    name: "CT Weng",
    contact: "+60126343199",
    agency: "The Roof Realty - Puchong",
    channelCounts: { sale: 5, rent: 1 },
  },
  {
    name: "Nicole How",
    contact: "+60163282666",
    agency: "Chester Properties Sdn Bhd (HQ)",
    channelCounts: { sale: 14, rent: 0 },
  },
  {
    name: "Patriciar Tham",
    contact: "+60196898343",
    agency: "Propnex Realty Sdn. Bhd.",
    channelCounts: { sale: 18, rent: 34 },
  },
  {
    name: "Francis Ngooi",
    contact: "+601165185155",
    agency: "Reapfield Properties (HQ) Sdn. Bhd.",
    channelCounts: { sale: 29, rent: 21 },
  },
];

describe("Area/Condo Specialist display", () => {
  it("Area search", () => {
    cy.visit("https://www.iproperty.com.my/sale/klcc/all-residential/");

    cy.get(containerSelector).should("exist");

    // TOOD: title should contain Area specialists for KLCC
    cy.get(titleSelector).contains("Area specialists for KLCC")
    
    // TODO: subtitle should contain We have ${AREA_AGENTS_DATA's total} specialist(s) in this area
       cy.get(subTitleSelector).contains("We have 7 specialist(s) in this area")

       //To try and get count of AREA_AGENTS_DATA
       /*cy.task("generateJSONfromHeader", { AREA_AGENTS_DATA })
             .then((users) => {
               dataList = [...users].map(user => user.name)
             }))

         it('logs the loaded dataList', () => {

           cy.log(dataList)
           cy.log(dataList[1])
           cy.log(dataList.length)
         })*/
       // To ensure we can get the right count in the subtitle
       //cy.get(subTitleSelector).contains("We have" + dataList.length + "specialist(s) in this area")


    // TOOD: agentName, agencyname, saleAndRent, phoneNumber should be exist and same total as ${AREA_AGENTS_DATA's total}
    cy.get(agentNameSelector).should('have.length', 7)
    cy.get(agencyNameSelector).should('have.length', 7)
    cy.get(saleAndRentSelector).should('have.length', 7)
    cy.get(phoneNumberSelector).should('have.length', 7)

      //To try and get count of AREA_AGENTS_DATA
           /*cy.task("generateJSONfromHeader", { AREA_AGENTS_DATA })
                 .then((users) => {
                   dataList = [...users].map(user => user.name)
                 }))

             it('logs the loaded dataList', () => {

               cy.log(dataList)
               cy.log(dataList[1])
               cy.log(dataList.length)
             })*/
           // To ensure we can get the right count
           /*
            cy.get(agentNameSelector).should('have.length', dataList.length)
            cy.get(agencyNameSelector).should('have.length', dataList.length)
            cy.get(saleAndRentSelector).should('have.length', dataList.length)
            cy.get(phoneNumberSelector).should('have.length', dataList.length)
           */


    // TODO: the first agency name should be found in AREA_AGENTS_DATA
           //To try and get all the agency name and compare when
           /*
           cy.task("generateJSONfromHeader", { AREA_AGENTS_DATA })
                 .then((users) => {
                   dataList = [...users].map(user => user.agency)
                 }))

             it('logs the loaded dataList', () => {

               cy.log(dataList)
               cy.log(dataList[1])
               cy.log(dataList.length)
             })*/
    // To get the first agent name once the site is loaded
    cy.get(agentNameSelector).eq(0)

    // To verify the first agent name is present in the datalist
    //cy.get(agentNameSelector).eq(0).contains(datalist)

  });
});
