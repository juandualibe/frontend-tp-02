"use client";

import { useParams } from "react-router-dom";
import Sidebar from "../../components/navigation/Sidebar";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileSections from "../../components/profile/ProfileSections";
import Footer from "../../components/navigation/Footer";

export default function ProfilePage() {
  const params = useParams();
  const memberId = params.id;

  return (
    <div style={styles.container}>
      <ProfileHeader memberId={memberId} />
      <ProfileInfo memberId={memberId} />
      <ProfileSections memberId={memberId} />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
  },
};
