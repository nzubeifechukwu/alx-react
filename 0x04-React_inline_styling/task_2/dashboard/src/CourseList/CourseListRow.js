import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={{ backgroundColor: "#f5f5f5ab" }}>
      {isHeader ? (
        textSecondCell === null ? (
          <th
            colSpan={2}
            style={{ backgroundColor: "#deb5b545" }}
            className={css(styles.th)}
          >
            {textFirstCell}
          </th>
        ) : (
          <>
            <th
              style={{ backgroundColor: "#deb5b545" }}
              className={css(styles.th)}
            >
              {textFirstCell}
            </th>
            <th
              style={{ backgroundColor: "#deb5b545" }}
              className={css(styles.th)}
            >
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },

  td: {
    width: "80%",
  },

  // trNthChild2: {
  //   textAlign: "left",
  // },
});

export default CourseListRow;
