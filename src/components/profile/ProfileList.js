import React from 'react'
import styles from "./ProfileList.module.css"
import Profile from './Profile'

const ProfileList = () => {
  return (
    <section className={styles.center}>
        <div>
          <h1>Team Members</h1>
          
          <div className={styles["profile-container"]}>
            <Profile/>
          </div>
        </div>
    </section>
  )
}

export default ProfileList