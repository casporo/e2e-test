/// <reference types="cypress" />

const skeletonSelector =
  "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistSkeletonWrapper]";
const containerSelector =
  "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistCarouselPlaceholder]";

// TODO: find title
const titleSelector = "";

describe(
  "Area/Condo Specialist display",
  {
    viewportWidth: 375,
    viewportHeight: 667,
  },
  () => {
    it("Area search", () => {
      cy.visit("https://www.iproperty.com.my/sale/klcc/all-residential/");

      cy.get(containerSelector).should("not.inViewport");

      // TODO: scroll after 5th cards

      // TODO: if api still loading, skeleton exist else container

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
