import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: <Translate id="blockTitle_1">Docusaurus 2 Was Here</Translate>,
    description: (
      <Translate id="blockDesc_1">Just a website designed all in Docusaurus 2.</Translate>
    ),
  },
  {
    title: <Translate id="blockTitle_2">Cool Placeholder</Translate>,
    description: (
      <Translate id="blockDesc_2">
        Not deleting this in case I need to feature something here.
      </Translate>
    ),
  },
  {
    title: <Translate id="blockTitle_3">Changelog</Translate>,
    description: (
      <Translate id="blockDesc_3">Jan 12, 2023: I should fix this website.</Translate>
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
