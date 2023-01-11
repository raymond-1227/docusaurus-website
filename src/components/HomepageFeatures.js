import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Docusaurus 2 Was Here",
    description: (
      <>
        Just a website designed all in Docusaurus 2.
      </>
    ),
  },
  {
    title: "Cool Placeholder",
    description: (
      <>
        Not deleting this in case I need to feature something here.
      </>
    ),
  },
  {
    title: "Changelog",
    description: (
      <>
        Jan 12, 2023: I should fix this website.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
