import React from 'react'
import styles from "./ProfileList.module.css"
import Profile from './Profile'
import profile1 from "../../assets/profile1.png"
import profile2 from "../../assets/profile2.png"
import profile3 from "../../assets/profile3.png"

const ProfileList = () => {
  return (
    <section className={styles.center}>
        <div>
          <h1>Team Members</h1>
          
          <div className={styles["profile-container"]}>
            <Profile 
              image={profile1}
              name={"Adaora Nwodo"}
              job={"Cloud Engineer"}
              company={"Microsoft"}
              link={"https://twitter.com/AdoraNwodo"}  
            />
            <Profile 
              image={profile2}
              name={"John Doe"}
              job={"Web Developer"}
              company={"Google"}
              link={"#"}  
            />
            <Profile 
              image={profile3}
              name={"Fisayo Tinuke"}
              job={"Mobile Developer"}
              company={"Tesla"}
              link={"#"}  
            />
          </div>
        </div>
    </section>
  )
}

export default ProfileList