/// <reference types="cypress" />

describe("Area/Condo Specialist display", () => {
  beforeEach(() => {});

  it("Area search", () => {
    cy.visit("https://www.iproperty.com.my/sale/klcc/all-residential/");

    const containerSelector =
      "div[class^=ListingsListstyle__AgentContainerWrapper]";
    const titleSelector =
      "div[class^=AgentSpecialistDesktopCarouselstyle__Title]";
    const subTitleSelector =
      "div[class^=AgentSpecialistDesktopCarouselstyle__SubTitle]";
    const agentNameSelector = "a[class^=AgentSpecialistCardstyle__Name]";
    const agencyNameSelector =
      "div[class^=AgentSpecialistCardstyle__Organization]";
    const saleAndRentSelector =
      "div[class^=AgentSpecialistCardstyle__ListingsCount]";
    const phoneNumberSelector =
      "div[class^AgentSpecialistCardstyle__PhoneNumber]";

    cy.get(containerSelector).should("exist");
  });
});
