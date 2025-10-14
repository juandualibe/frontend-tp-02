"use client";

import { useParams } from "react-router-dom";
import Sidebar from "../../components/navigation/Sidebar";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileSections from "../../components/profile/ProfileSections";
import Footer from "../../components/navigation/Footer";

// Importar perfiles personalizados
import ManuelProfile from "../../components/profile/manuel/ManuelProfile";
import JuanProfile from "../../components/profile/juan/JuanProfile";
import GermanProfile from "../../components/profile/german/GermanProfile";
import NicolasProfile from "../../components/profile/nicolas/NicolasProfile";

export default function ProfilePage() {
  const params = useParams();
  const memberId = params.id;

  // Renderizar perfil personalizado según el miembro
  if (memberId === 'manuel') {
    return <ManuelProfile />;
  }
  
  if (memberId === 'juan') {
    return <JuanProfile />;
  }
  
  if (memberId === 'german') {
    return <GermanProfile />;
  }
  
  if (memberId === 'nicolas') {
    return <NicolasProfile />;
  }

  // Fallback para cualquier otro caso
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
