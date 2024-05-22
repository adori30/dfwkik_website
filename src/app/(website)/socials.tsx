import { SocialIcon } from "react-social-icons";

export default function Socials({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div className={`flex flex-row justify-center ${className}`}>
      <SocialIcon
        url="https://www.facebook.com/DFWKIK"
        style={{
          height: "32px",
          width: "32px",
          marginRight: "8px",
          marginLeft: "8px",
        }}
        bgColor="#333333"
      />
      <SocialIcon
        url="https://www.instagram.com/DFWKIK"
        style={{
          height: "32px",
          width: "32px",
          marginRight: "8px",
        }}
        bgColor="#333333"
      />
      <SocialIcon
        url="mailto:inquires@dfwkik.org"
        style={{ height: "32px", width: "32px" }}
        bgColor="#333333"
      />
    </div>
  );
}
