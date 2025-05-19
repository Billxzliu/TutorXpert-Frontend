import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const isTutor = storedUser?.role === "tutor";

  useEffect(() => {
    if (!storedUser?.id) {
      setFetchError("No user ID found in local storage");
      setIsLoading(false);
      return;
    }
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/profiles/${storedUser.id}`);
        console.log("Fetched profile:", res.data);
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
        setFetchError("Failed to load profile. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, [storedUser?.id]);

  const renderStudentProfile = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><strong>First Name:</strong> {profile.first_name}</div>
      <div><strong>Last Name:</strong> {profile.last_name}</div>
      <div><strong>Education Level:</strong> {profile.education_level || "N/A"}</div>
      <div><strong>Availability:</strong> {profile.availability || "N/A"}</div>
      <div><strong>Address:</strong> {profile.address || "N/A"}</div>
    </div>
  );

  const renderTutorProfile = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><strong>First Name:</strong> {profile.first_name}</div>
      <div><strong>Last Name:</strong> {profile.last_name}</div>
      <div><strong>Phone:</strong> {profile.phone_number || "N/A"}</div>
      <div><strong>Education Level:</strong> {profile.education_level || "N/A"}</div>
      <div><strong>Major:</strong> {profile.major || "N/A"}</div>
      <div><strong>Subjects:</strong> {profile.subjects || "N/A"}</div>
      <div><strong>Availability:</strong> {profile.availability || "N/A"}</div>
      <div><strong>Address:</strong> {profile.address || "N/A"}</div>
      <div><strong>Experience:</strong> {profile.has_experience ? "Yes" : "No"}</div>
      {profile.has_experience && (
        <div className="md:col-span-2">
          <strong>Experience Details:</strong> {profile.experience_details || "N/A"}
        </div>
      )}
      <div><strong>Working With Children Check:</strong> {profile.working_with_children_check || "N/A"}</div>
      <div><strong>Certifications:</strong> {profile.certifications || "N/A"}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 md:px-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="text-2xl">My Profile</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-muted-foreground">Loading profile...</p>
            ) : fetchError ? (
              <p className="text-red-500">{fetchError}</p>
            ) : isTutor ? (
              renderTutorProfile()
            ) : (
              renderStudentProfile()
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
