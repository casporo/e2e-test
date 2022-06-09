/// <reference types="cypress" />

describe(
  "Area/Condo Specialist display",
  {
    viewportWidth: 375,
    viewportHeight: 667,
  },
  () => {
    beforeEach(() => {});

    it("Area search", () => {
      const skeletonSelector =
        "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistSkeletonWrapper]";
      const containerSelector =
        "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistCarouselPlaceholder]";
      const titleSelector =
        "div[class^=AgentSpecialistDesktopCarouselstyle__Title]";

      cy.visit("https://www.iproperty.com.my/sale/klcc/all-residential/");

      cy.get(containerSelector).should("not.inViewport");
    });

    it("Condo search", () => {
      cy.visit(
        "https://www.iproperty.com.my/sale/mont-kiara/all-residential/?propertyId=69cb1a1af3d44ad4a087d0d9ca88fe81&property=Residensi%2022"
      );

      const skeletonSelector =
        "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistSkeletonWrapper]";
      const containerSelector =
        "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistCarouselPlaceholder]";
      const titleSelector =
        "div[class^=AgentSpecialistDesktopCarouselstyle__Title]";

      cy.get(containerSelector).should("not.inViewport");
    });

    it("Condo search - lesser than 5 listing", () => {});
  }
);
