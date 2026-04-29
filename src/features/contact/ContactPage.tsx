import Eyebrow from "@/components/general/Eyebrow";
import styles from "./ContactPage.module.css";

const HIGHLIGHTS = [
  "Form is reviewed by a human team",
  "Most routing happens within one business day",
  "Include context so we can respond quickly",
] as const;

export default function ContactPage() {
  return (
    <div className={`pageWrap ${styles.page}`}>
      <section className={styles.shell}>
        <Eyebrow text="Contact USDS" alignment="left" />

        <h1 className={styles.title}>
          Contact the
          <span className={styles.titleAccent}>mission.</span>
        </h1>

        <div className={styles.rule} aria-hidden="true" />

        <p className={styles.lede}>
          Send us your question or request. The form is open below so you can
          submit immediately.
        </p>

        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item) => (
            <li key={item} className={styles.highlightItem}>
              {item}
            </li>
          ))}
        </ul>

        <form className={styles.form}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Full name <span aria-hidden="true">*</span>
            </span>
            <input
              className={styles.input}
              type="text"
              name="fullName"
              autoComplete="name"
              placeholder="Jane Smith"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Email <span aria-hidden="true">*</span>
            </span>
            <input
              className={styles.input}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="jane@example.com"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Organization or agency</span>
            <input
              className={styles.input}
              type="text"
              name="organization"
              autoComplete="organization"
              placeholder="Agency or team name"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Topic <span aria-hidden="true">*</span>
            </span>
            <select className={styles.input} name="topic" defaultValue="" required>
              <option value="" disabled>
                Select a topic
              </option>
              <option value="agency-partnership">Agency partnership</option>
              <option value="media">Media request</option>
              <option value="careers">Careers and hiring</option>
              <option value="policy">Policy or privacy</option>
              <option value="accessibility">Accessibility report</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Relevant page URL</span>
            <input
              className={styles.input}
              type="url"
              name="pageUrl"
              autoComplete="url"
              placeholder="https://"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Message <span aria-hidden="true">*</span>
            </span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              placeholder="Share the request, timeline, and any context that helps us route this."
              required
            />
          </label>

          <div className={styles.actions}>
            <button className={styles.submit} type="submit">
              Send message
            </button>
            <p className={styles.note}>
              For hiring questions, include role track and expected timeline.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
