const TEMPDATA = [
  {
    id: 1,
    title: "If you give a mouse a cookie",
    date: "February 15, 2020",
    category: "white",
    description: "Yo yo ma, lalalalala",
    text: "For major physical diseases, it is widely accepted that members of the public will benefit by knowing what actions they can take for prevention, early intervention, and treatment. However, this type of public knowledge about mental disorders (mental health literacy) has received much less attention. There is evidence from surveys in several countries for deficiencies in (a) the public's knowledge of how to prevent mental disorders, (b) recognition of when a disorder is developing, (c) knowledge of help-seeking options and treatments available, (d) knowledge of effective self-help strategies for milder problems, and (e) first aid skills to support others affected by mental health problems. Nevertheless, there is evidence that a range of interventions can improve mental health literacy, including whole-of-community campaigns, interventions in educational settings, Mental Health First Aid training, and information websites. There is also evidence for historical improvements in mental health literacy in some countries. Increasing the community's mental health literacy needs to be a focus for national policy and population monitoring so that the whole community is empowered to take action for better mental health. (APA PsycInfo Database Record (c) 2019 APA, all rights reserved). For 2022’s Mental Health Awareness Month, NAMI will amplify the message of “Together for Mental Health.” We will use this time to bring our voices together to advocate for mental health and access to care through NAMI’s blog, personal stories, videos, digital toolkits, social media engagements and national events.Together, we can realize our shared vision of a nation where anyone affected by mental illness can get the appropriate support and quality of care to live healthy, fulfilling lives.",
    image:
      "https://images.unsplash.com/photo-1612607198686-6bd0f67ab073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
  },
  {
    id: 2,
    title: "Why do that?",
    date: "August 1, 1999",
    category: "black",
    description:
      "Learn JavaScript and other web development technology concepts through easy-to-understand explanations written in plain English.",
  },
  {
    id: 3,
    title: "Doodle doodle dee",
    date: "December 18, 2005",
    category: "green",
    description:
      "event - compiled client and server successfully in 662 ms (366 modules)",
  },
  {
    id: 4,
    title: "What is this and that and that?",
    date: "October 5, 2018",
    category: "green",
    description:
      "blah blah blhasdfasfjewpofrjewpfrkemw kferdf dsfdw asdfdsgetegegf",
  },
  {
    id: 5,
    title: "Get a Unique List of Objects in an Array of Object in JavaScript",
    date: "March 17, 2003",
    category: "purple",
    description: "Blah don't know what to put here but lalalalalala",
    text: "Recently, I needed a way to ensure that my JavaScript array of objects does not contain any duplicate objects based on an ‘id’ key. While I do enjoy more common approaches to this solution with the use of a simple ‘for’ loop it is always a bit of fun to see how folks have come up with modern solutions.",
    image:
      "https://yagisanatode.com/wp-content/uploads/2021/07/get-a-unique-list-of-objects-in-an-array-of-objects-in-javascript-1200x675.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
  },
];

export default TEMPDATA;

export function getEventById(id) {
  return TEMPDATA.find((event) => event.id === +id);
}

export const uniqCategory = [
  ...new Map(
    TEMPDATA.map((item) => [item["category"], item.category])
  ).values(),
];
