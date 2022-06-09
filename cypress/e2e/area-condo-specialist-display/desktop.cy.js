/// <reference types="cypress" />

const containerSelector =
  "div[class^=ListingsListstyle__AgentContainerWrapper]";
const titleSelector = "div[class^=AgentSpecialistDesktopCarouselstyle__Title]";
const subTitleSelector =
  "div[class^=AgentSpecialistDesktopCarouselstyle__SubTitle]";
const agentNameSelector = "a[class^=AgentSpecialistCardstyle__Name]";
// TODO: find agency name
const agencyNameSelector = "";
const saleAndRentSelector =
  "div[class^=AgentSpecialistCardstyle__ListingsCount]";
const phoneNumberSelector = "div[class^AgentSpecialistCardstyle__PhoneNumber]";

const AREA_AGENTS_DATA = [
  {
    name: "Gwen Ng",
    contact: "+60169173331",
    agency: "Apexe Realty",
    channelCounts: { sale: 4, rent: 7 },
  },
  {
    name: "Daniel Yong",
    contact: "+60163375377",
    agency: "Dutama Properties",
    channelCounts: { sale: 123, rent: 46 },
  },
  {
    name: "Merchel Liew",
    contact: "+60192898346",
    agency: "Propnex Realty Sdn. Bhd.",
    channelCounts: { sale: 17, rent: 42 },
  },
  {
    name: "Sylvia Chin",
    contact: "+60163231471",
    agency: "Propnex Realty Sdn. Bhd.",
    channelCounts: { sale: 44, rent: 48 },
  },
  {
    name: "Patriciar Tham",
    contact: "+60196898343",
    agency: "Propnex Realty Sdn. Bhd.",
    channelCounts: { sale: 17, rent: 33 },
  },
  {
    name: "Francis Ngooi",
    contact: "+601165185155",
    agency: "Reapfield Properties (HQ) Sdn. Bhd.",
    channelCounts: { sale: 43, rent: 24 },
  },
  {
    name: "Mabel Mak",
    contact: "+60129717115",
    agency: "Propnex Realty Sdn. Bhd. - KL",
    channelCounts: { sale: 8, rent: 6 },
  },
  {
    name: "Dylan Ng",
    contact: "+60166661847",
    agency: "Greenfield Properties - Kota Damansara",
    channelCounts: { sale: 39, rent: 48 },
  },
  {
    name: "Elsis Liew",
    contact: "+60189880204",
    agency: "Propnex Realty Sdn. Bhd.",
    channelCounts: { sale: 11, rent: 8 },
  },
  {
    name: "Nicole How",
    contact: "+60163282666",
    agency: "Chester Properties Sdn Bhd (HQ)",
    channelCounts: { sale: 14, rent: 0 },
  },
  {
    name: "CT Weng",
    contact: "+60126343199",
    agency: "The Roof Realty - Puchong",
    channelCounts: { sale: 3, rent: 0 },
  },
];

describe("Area/Condo Specialist display", () => {
  it("Area search", () => {
    cy.visit("https://www.iproperty.com.my/sale/klcc/all-residential/");

    cy.get(containerSelector).should("exist");

    // TOOD: all selector should be exist

    // TOOD: all title should be same total count as AREA_AGENTS_DATA

    // TODO: the first agent should be found in AREA_AGENTS_DATA
  });
});
