import React from "react"
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaSoundcloud, FaFileAlt } from 'react-icons/fa';
import SocialMediaIcon from "../components/socialMediaIcon"


const SocialMediaIcons = () => {
  return (
      <div className="contact__social_icons__row">
        <SocialMediaIcon href="https://twitter.com/mwhatters">
          <FaTwitter />
        </SocialMediaIcon>
        
        <SocialMediaIcon href="https://github.com/mwhatters">
          <FaGithub />
        </SocialMediaIcon>
        
        <SocialMediaIcon href="https://www.linkedin.com/in/mwhatters/">
          <FaLinkedin />
        </SocialMediaIcon>
        
        <SocialMediaIcon href="https://www.youtube.com/channel/UC0qqMXBvdjq8St2vwGzOZyg">
          <FaYoutube />
        </SocialMediaIcon>
        
        <SocialMediaIcon href="https://soundcloud.com/lushboy-studios">
        <FaSoundcloud />
        </SocialMediaIcon>
        
        <SocialMediaIcon href="https://drive.google.com/file/d/1oMv06EKCDOcHM_CaPkJ7mCDDuUtqbdve/view?usp=sharing">
          <FaFileAlt />
        </SocialMediaIcon>
      </div>
  )
}

export default SocialMediaIcons
