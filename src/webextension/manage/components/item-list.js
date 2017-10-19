/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import ItemSummary from "./item-summary";
import ScrollingList from "../../widgets/scrolling-list";

import styles from "./item-list.css";

export default function ItemList({items, selected, onItemSelected}) {
  if (items.length === 0) {
    return (
      <Localized id="item-list-empty">
        <div className={styles.empty}>
          lOOKs lIKe yOu dON&apos;t hAVe aNy eNTRIEs sAVEd yEt...
        </div>
      </Localized>
    );
  }

  return (
    <ScrollingList itemClassName={styles.item} data={items} selected={selected}
                   onItemSelected={onItemSelected}>
      {({title, username}) => {
        return (
          <ItemSummary title={title} username={username}/>
        );
      }}
    </ScrollingList>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selected: PropTypes.string,
  onItemSelected: PropTypes.func.isRequired,
};
