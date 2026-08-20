const contactEmail = "chenyikan67@gmail.com";

const englishSections = [
  {
    title: "1. Data we collect",
    body: [
      "We do not collect, transmit, sell, or share user personal data.",
      "The app does not upload plaintext, ciphertext, encryption keys, passwords, clipboard content, device identifiers, location, contacts, photos, files, usage analytics, crash reports, or advertising identifiers.",
      "The app does not require an account, registration, login, phone number, email address, or network connection.",
    ],
  },
  {
    title: "2. Local processing",
    body: [
      "All encryption and decryption are performed locally on the user's device.",
      "User-entered text, ciphertext, and keys are processed on the device only. They are not sent to us or to any server.",
    ],
  },
  {
    title: "3. Local storage",
    body: [
      "The app does not save message history, plaintext history, or ciphertext history.",
      "To make repeated use easier, the app stores the last valid key only in the app's private local storage on the user's device. The app also stores local preferences such as the selected interface language, whether the first-use introduction has been shown, and whether the key-copy safety notice has been shown.",
      "This local data is not uploaded by the app and is not shared with us.",
      "Users can delete this local data by clearing the app's data in Android settings or uninstalling the app.",
    ],
  },
  {
    title: "4. Clipboard",
    body: [
      "When the user taps a copy button, the app places the selected key or output result into the Android system clipboard.",
      "Clipboard behavior is controlled by the Android operating system. Other apps or system features may be able to access clipboard content depending on the device, Android version, and user settings. Users should avoid copying or sharing sensitive keys through the same communication channel as encrypted text.",
    ],
  },
  {
    title: "5. Permissions",
    body: [
      "The current Android version of TEXT ENCRYPTION does not request Internet permission.",
      "The app does not request location, camera, microphone, contacts, SMS, phone, storage, or notification permissions.",
    ],
  },
  {
    title: "6. Third-party SDKs and services",
    body: [
      "The app does not include advertising SDKs, analytics SDKs, behavior tracking SDKs, cloud messaging SDKs, or social login SDKs.",
      "The app uses cryptographic software libraries only to perform local encryption and key derivation on the user's device.",
    ],
  },
  {
    title: "7. Security",
    body: [
      "TEXT ENCRYPTION uses local encryption and decryption mechanisms. The app is designed so that plaintext, ciphertext, and keys do not need to be sent to the developer.",
      "Encryption is not a guarantee against every risk. This app cannot protect information if the device is compromised, unlocked by another person, infected with malware, recorded by screenshots or screen recording, exposed through the clipboard, or shared by the recipient after decryption.",
    ],
  },
  {
    title: "8. Children's privacy",
    body: [
      "TEXT ENCRYPTION is a general utility app and is not directed to children. We do not knowingly collect personal data from children.",
    ],
  },
  {
    title: "9. Changes to this policy",
    body: [
      "If the app's data handling changes in a future version, this privacy policy will be updated. The updated effective date will be shown at the top of this policy.",
    ],
  },
  {
    title: "10. Contact",
    body: ["If you have questions about this privacy policy, contact us at:"],
  },
];

const chineseSections = [
  {
    title: "1. 我们收集的数据",
    body: [
      "我们不收集、不传输、不出售、也不分享用户个人数据。",
      "本 App 不上传原文、密文、加密密钥、口令、剪贴板内容、设备标识符、位置、联系人、照片、文件、使用统计、崩溃报告或广告标识符。",
      "本 App 不需要账号、注册、登录、手机号、邮箱地址或网络连接。",
    ],
  },
  {
    title: "2. 本地处理",
    body: [
      "所有加密和解密都在用户自己的设备上本地完成。",
      "用户输入的文字、密文和密钥只在设备本地处理，不会发送给我们，也不会发送到任何服务器。",
    ],
  },
  {
    title: "3. 本地存储",
    body: [
      "本 App 不保存消息历史、不保存原文历史、不保存密文历史。",
      "为了方便用户下次继续使用，本 App 只会在应用私有本地存储中保存上一次有效密钥。本 App 还会保存本地偏好设置，例如用户选择的界面语言、首次使用说明是否已显示、复制密钥安全提示是否已显示。",
      "这些本地数据不会被本 App 上传，也不会分享给我们。",
      "用户可以通过 Android 系统设置清除本 App 数据，或卸载本 App 来删除这些本地数据。",
    ],
  },
  {
    title: "4. 剪贴板",
    body: [
      "当用户点击复制按钮时，本 App 会把用户选择复制的密钥或输出结果写入 Android 系统剪贴板。",
      "剪贴板行为由 Android 系统控制。根据设备、Android 版本和用户设置，其他 App 或系统功能可能可以访问剪贴板内容。用户不应把密钥和加密后的文字通过同一个通信渠道发送。",
    ],
  },
  {
    title: "5. 权限",
    body: [
      "当前 Android 版本的 TEXT ENCRYPTION 不申请联网权限。",
      "本 App 不申请位置、相机、麦克风、联系人、短信、电话、存储或通知权限。",
    ],
  },
  {
    title: "6. 第三方 SDK 和服务",
    body: [
      "本 App 不包含广告 SDK、统计分析 SDK、行为追踪 SDK、云消息 SDK 或社交登录 SDK。",
      "本 App 仅使用密码学软件库在用户设备本地执行加密和密钥派生。",
    ],
  },
  {
    title: "7. 安全说明",
    body: [
      "TEXT ENCRYPTION 使用本地加密和解密机制。本 App 的设计目标是让原文、密文和密钥不需要发送给开发者。",
      "加密并不意味着可以防御所有风险。如果手机被他人解锁、感染恶意软件、被截图或录屏、剪贴板内容被读取，或者对方解密后主动转发内容，本 App 无法防止这些风险。",
    ],
  },
  {
    title: "8. 儿童隐私",
    body: [
      "TEXT ENCRYPTION 是通用工具类 App，并非面向儿童。我们不会有意收集儿童个人数据。",
    ],
  },
  {
    title: "9. 隐私政策变更",
    body: [
      "如果未来版本的数据处理方式发生变化，我们会更新本隐私政策，并在顶部显示新的生效日期。",
    ],
  },
  {
    title: "10. 联系方式",
    body: ["如果你对本隐私政策有任何问题，请通过以下邮箱联系我们："],
  },
];

function PolicySection({
  title,
  body,
}: {
  title: string;
  body: string[];
}) {
  return (
    <section className="policy-section">
      <h3>{title}</h3>
      {body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <article className="policy-card">
        <header className="hero">
          <p className="eyebrow">TEXT ENCRYPTION</p>
          <h1>Privacy Policy</h1>
          <p className="summary">
            TEXT ENCRYPTION is a local text encryption tool. It does not use
            accounts, servers, analytics, advertising, or tracking.
          </p>
          <dl className="meta-grid">
            <div>
              <dt>Effective date</dt>
              <dd>2026-08-20</dd>
            </div>
            <div>
              <dt>Package name</dt>
              <dd>com.textencryption.app</dd>
            </div>
            <div>
              <dt>Contact email</dt>
              <dd>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </dd>
            </div>
          </dl>
        </header>

        <section className="language-block" aria-labelledby="english-title">
          <h2 id="english-title">English</h2>
          <p>
            TEXT ENCRYPTION is a local text encryption tool. The app helps users
            encrypt and decrypt text on their own device. The app does not
            provide messaging, accounts, cloud sync, or server-based storage.
          </p>
          {englishSections.map((section) => (
            <PolicySection key={section.title} {...section} />
          ))}
          <p className="contact-line">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </section>

        <section className="language-block" aria-labelledby="chinese-title">
          <h2 id="chinese-title">中文</h2>
          <p>
            TEXT ENCRYPTION 是一个本地文字加密工具。这个 App
            帮助用户在自己的设备上加密和解密文字。这个 App
            不提供聊天、账号、云同步或服务器存储功能。
          </p>
          {chineseSections.map((section) => (
            <PolicySection key={section.title} {...section} />
          ))}
          <p className="contact-line">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </section>
      </article>
    </main>
  );
}
