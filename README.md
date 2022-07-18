# e2e

#### Setup


  ```bash
  node -v ^14.19.0
  npm -v >= 6.14.15
  npm install -g yarn
  yarn install
  ```

#### Run on Local machine

  ```bash
  # start for desktop
  yarn start

  # start for mobile
  yarn start:mobile
  ```

## User Story

**Title:** \
Area/Condo specialist display

**Summary:** \
To display area & condo specialist component in desktop view, and render them accordingly in mobile view

**Scope:** \
Display Area & Condo specialist information
-	Desktop view
-	Mobile view

**URL:** \
[Area search](https://www.iproperty.com.my/sale/klcc/all-residential/) \
[Condo search](https://www.iproperty.com.my/sale/mont-kiara/all-residential/?propertyId=69cb1a1af3d44ad4a087d0d9ca88fe81&property=Residensi%2022)

## Acceptance Criteria

### Area search - Desktop view

When user perform an **Area** search in **desktop** view \
Then display the **Area Specialist** on the right side

<img width="451" alt="image" src="https://user-images.githubusercontent.com/93306607/179473264-c3ddce9a-58da-45a3-9b4f-d519c7293cf6.png">

**Information to be displayed:** 

1.	Title for area specialist
2.	Subtitle (total number of specialist)
3.	Agent name
4.	Agency name
5.	Sale & rent listing numbers
6.	Phone number


### Area search - Mobile view
When user perform an **Area** search in **mobile** view \
Then display the **Area Specialist** in between the _5th and 6th listing_ (display skeleton while still loading)

<img width="297" alt="image" src="https://user-images.githubusercontent.com/93306607/179473547-f3131868-a0d0-47e1-b68e-d407a65eef6d.png">

_Note: It needs to be Async Loadable as the component is positioned below the fold to save on the initial payload._

### Condo search - Mobile view

When user perform a **Condo search** in **mobile** view \
And both **condo** and **area specialists** are available \
Then display the **Condo Specialist** in between the _5th and 6th listing_ (display skeleton while still loading) \
And display **Area Specialist** in between _9th and 10th listing_ (display skeleton while still loading) \
If there are lesser than 5 listings on SRP, then the area and condo specialist will appear as the last items after the listings.

