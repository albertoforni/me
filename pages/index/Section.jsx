import React from "react";
import PropTypes from "prop-types";
import { merge, $, parent } from "glamor";
import ReactMarkdown from "react-markdown";
import { Colors, MediaQueries } from "../../common/style";

const styles = {
  section: (parentClass) =>
    merge(
      {
        width: "60%",
        margin: "3rem auto",
        lineHeight: "3.4rem",
        fontSize: "2rem",
        opacity: 0,
        [MediaQueries.medium]: {
          width: "80%",
        },
        [MediaQueries.small]: {
          width: "80%",
        },
      },
      parent(`.${parentClass}`, {
        opacity: 1,
        transition: "opacity 400ms ease-out",
      }),
      $(" h3", { margin: 0, marginTop: "4rem" }),
      $(" h4", { margin: 0, color: Colors.lightGray, fontWeight: 400 })
    ),
};

const Section = ({ content, parentClass }) => (
  <section className={styles.section(parentClass)}>
    <ReactMarkdown source={content} />
  </section>
);

Section.propTypes = {
  content: PropTypes.string.isRequired,
  parentClass: PropTypes.string.isRequired,
};

export default Section;
