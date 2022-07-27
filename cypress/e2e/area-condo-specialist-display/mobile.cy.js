/// <reference types="cypress" />

const skeletonSelector =
  "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistSkeletonWrapper]";
const containerSelector =
  "div[class^=AgentSpecialistAsyncComponentsstyle__AgentSpecialistCarouselPlaceholder]";

const ApartmentfifthCard = "div[class^=ListingHeadingstyle__HeadingTitle-bPnUeN bwCNIt]";

const CondoFifthCard = "div[class^=ListingHeadingstyle__HeadingTitle-bPnUeN cYvHoO]";
const CondoNinthCard = "div[class^=ListingHeadingstyle__HeadingTitle-bPnUeN cYvHoO]";



// TODO: find title
const titleSelector = "div[class^=Filtersstyle__Row-DpPge OPMhk]";

// TODO: find agency name
const agencyNameSelector = "div[class^=HeadingAgencyLogo__Wrapper-bNBhLY hJEsO]";
const saleAndRentSelector =
  "div[class^=AgentSpecialistCardstyle__ListingsCount]";
const phoneNumberSelector = "div[class^AgentSpecialistCardstyle__PhoneNumber]";

const AREA_AGENTS_DATA = [
  {
    name: "Cruz Looi",
    contact: "+60166526358",
    agency: "Kith and Kin Realty Sdn. Bhd.",
    channelCounts: { sale: 11, rent: 15 },
  },
  {
    name: "Don Lee",
    contact: "+60124700765",
    agency: "Metro City Realtors Sdn. Bhd. (MK)",
    channelCounts: { sale: 281, rent: 12 },
  },
  {
    name: "Michelle Cheong",
    contact: "+60165020868",
    agency: "Landbanc Property Sdn. Bhd.",
    channelCounts: { sale: 80, rent: 70 },
  },
  {
    name: "Carol Tong",
    contact: "+60146832968",
    agency: "Kith and Kin Realty Sdn. Bhd.",
    channelCounts: { sale: 6, rent: 12 },
  },
];

const CONDO_AGENTS_DATA = [
  {
    name: "Cindy Ng",
    contact: "+60129881017",
    agency: "STARLIGHT PROPERTY SDN BHD",
    channelCounts: { sale: 15, rent: 2 },
  },
];

describe(
  "Area/Condo Specialist display",
  () => {
    it("Area search", () => {
      cy.visit("https://www.iproperty.com.my/sale/klcc/all-residential/");

      cy.get(containerSelector).should("not.inViewport");

      // TODO: scroll after 5th cards
     cy.get('ApartmentfifthCard').scrollTo('bottom', { ensureScrollable: false })


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
      cy.get('CondoFifthCard').scrollTo('bottom', { ensureScrollable: false })

      // TODO: if api still loading, skeleton exist else container
      cy.wait(skeletonSelector)
      cy.get(titleSelector).should("contain", "Condo specialists for");

      // TODO: all title should be same total count as CONDO_AGENTS_DATA
      //To try and get all the agency name and compare with what is presented in mobile
                 /*
                 cy.task("generateJSONfromHeader", { CONDO_AGENTS_DATA })
                       .then((users) => {
                         dataList = [...users].map(user => user.agency)
                       }))

                   it('logs the loaded dataList', () => {
                          cy.log(dataList)
                          cy.log(dataList.length)
                   })
      cy.get(agencyNameSelector).find(datalist).should('have.length', datalist.length) */


      // TODO: scroll after 9th cards
     cy.get('CondoNinthCard').scrollTo('bottom', { ensureScrollable: false })

      // TODO: if api still loading, skeleton exist else container
      cy.wait(skeletonSelector)

      cy.get(containerSelector)
        .find(titleSelector)
        .should("contain", "Area specialists for")
        .and()
        .should("inViewport");
    });
  }
);
