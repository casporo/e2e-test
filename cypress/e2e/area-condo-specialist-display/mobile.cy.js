/// <reference types="cypress" />

const skeletonSelector =
  "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistSkeletonWrapper]";
const containerSelector =
  "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistCarouselPlaceholder]";

// TODO: find title
const titleSelector =
        "";

// TODO: find agency name
const agencyNameSelector = "";
const saleAndRentSelector =
  "div[class^=AgentSpecialistCardstyle__ListingsCount]";
const phoneNumberSelector = "div[class^AgentSpecialistCardstyle__PhoneNumber]";

const AREA_AGENTS_DATA = [
  {
    name: "Michelle Cheong",
    contact: "+60165020868",
    agency: "Landbanc Property Sdn. Bhd.",
    channelCounts: { sale: 84, rent: 77 },
  },
  {
    name: "Don Lee",
    contact: "+60124700765",
    agency: "Metro City Realtors Sdn. Bhd. (MK)",
    channelCounts: { sale: 321, rent: 24 },
  },
  {
    name: "Kevin Teh",
    contact: "+60135557333",
    agency: "IQI Realty Sdn Bhd - Desa Sri Hartamas",
    channelCounts: { sale: 25, rent: 29 },
  },
  {
    name: "Cruz Looi",
    contact: "+60166526358",
    agency: "Kith and Kin Realty Sdn. Bhd.",
    channelCounts: { sale: 9, rent: 19 },
  },
];

const CONDO_AGENTS_DATA = [
  {
    name: "Cindy Ng",
    contact: "+60129881017",
    agency: "JANWELL PROPERTIES SDN BHD",
    channelCounts: { sale: 17, rent: 15 },
  },
];

describe(
  "Area/Condo Specialist display",
  () => {
    it("Area search", () => {
      cy.visit("https://www.iproperty.com.my/sale/klcc/all-residential/");

      cy.get(containerSelector).should("not.inViewport");

      // TODO: scroll after 5th cards
      

      // TODO: if api still loading, skeleton exist else container
      
      cy.get(containerSelector).should("inViewport");

      cy.get(titleSelector).should("contain", "Area specialists for");
    });

    it("Condo search", () => {
      cy.visit(
        "https://www.iproperty.com.my/sale/mont-kiara/all-residential/?propertyId=69cb1a1af3d44ad4a087d0d9ca88fe81&property=Residensi%2022"
      );

      cy.get(containerSelector).should("not.inViewport");

      // TODO: scroll after 5th cards

      // TODO: if api still loading, skeleton exist else container

      cy.get(titleSelector).should("contain", "Condo specialists for");

      // TODO: all title should be same total count as CONDO_AGENTS_DATA

      // TODO: scroll after 9th cards

      // TODO: if api still loading, skeleton exist else container

      cy.get(containerSelector)
        .find(titleSelector)
        .should("contain", "Area specialists for")
        .and()
        .should("inViewport");
    });
  }
);
