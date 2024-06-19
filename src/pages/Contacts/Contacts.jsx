import React from "react";
import * as styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <main>
      <section className={styles.contactsSection}>
        <div className="container">
          <h1 className={styles.contactsTitle1}>Contacts</h1>
          <ul className={styles.contactsList}>
            <li className={styles.contactsListItem}>
              <h2 className={styles.contactsTitle2}>Location</h2>
              <p>Volgograd, Russia</p>
            </li>
            <li className={styles.contactsListItem}>
              <h2 className={styles.contactsTitle2}>Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+79044327169">+7 (904) 432-71-69</a>
              </p>
            </li>
            <li className={styles.contactsListItem}>
              <h2 className={styles.contactsTitle2}>Email</h2>
              <p>
                <a href="mailto:slesarenko.1994@inbox.ru">
                  slesarenko.1994@inbox.ru
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Contacts;
