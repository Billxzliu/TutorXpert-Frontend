
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const TutorFormFields = ({ formData, handleChange, handleSelectChange, handleCheckboxChange }) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g., (123) 456-7890"
          value={formData.phone || ""}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          placeholder="e.g., 123 Main St, Anytown, USA"
          value={formData.address || ""}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="educationLevel">Highest Education Level</Label>
        <Select
          onValueChange={(value) => handleSelectChange("educationLevel", value)}
          value={formData.educationLevel || ""}
        >
          <SelectTrigger id="educationLevel">
            <SelectValue placeholder="Select education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="High School">High School Diploma/GED</SelectItem>
            <SelectItem value="Associate">Associate Degree</SelectItem>
            <SelectItem value="Bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="Master">Master's Degree</SelectItem>
            <SelectItem value="Doctorate">Doctorate (PhD, EdD, etc.)</SelectItem>
            <SelectItem value="Professional">Professional Degree (MD, JD, etc.)</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="major">Major/Field of Study</Label>
        <Input
          id="major"
          name="major"
          placeholder="e.g., Computer Science, English Literature"
          value={formData.major || ""}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="certifications">Certifications (Optional)</Label>
        <Textarea
          id="certifications"
          name="certifications"
          placeholder="List any relevant certifications, e.g., Teaching Certificate, AWS Certified Developer"
          value={formData.certifications || ""}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="childrenCheck">Working with Children Check Status</Label>
        <Select
          onValueChange={(value) => handleSelectChange("childrenCheck", value)}
          value={formData.childrenCheck || ""}
        >
          <SelectTrigger id="childrenCheck">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Not Applicable">Not Applicable</SelectItem>
            <SelectItem value="Cleared">Cleared</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Not Cleared">Not Cleared</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subjects">Subjects You Can Teach</Label>
        <Textarea
          id="subjects"
          name="subjects"
          placeholder="e.g., Math, Science, English, History (comma-separated)"
          value={formData.subjects || ""}
          onChange={handleChange}
        />
      </div>
      
      <div className="items-top flex space-x-2">
        <Checkbox
          id="hasExperience"
          name="hasExperience"
          checked={formData.hasExperience || false}
          onCheckedChange={(checked) => handleCheckboxChange("hasExperience", checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="hasExperience"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have prior tutoring/teaching experience
          </Label>
        </div>
      </div>

      {formData.hasExperience && (
        <div className="space-y-2">
          <Label htmlFor="experienceDetail">Experience Details</Label>
          <Textarea
            id="experienceDetail"
            name="experienceDetail"
            placeholder="Describe your tutoring/teaching experience (e.g., years, subjects, age groups)"
            value={formData.experienceDetail || ""}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="availableTimes">Availability</Label>
        <Textarea
          id="availableTimes"
          name="availableTimes"
          placeholder="Describe your general availability (e.g., Weekdays 5 PM - 9 PM, Weekends flexible)"
          value={formData.availableTimes || ""}
          onChange={handleChange}
        />
      </div>

      <div className="items-top flex space-x-2">
         <Checkbox
          id="acceptShortNotice"
          name="acceptShortNotice"
          checked={formData.acceptShortNotice || false}
          onCheckedChange={(checked) => handleCheckboxChange("acceptShortNotice", checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="acceptShortNotice"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I can accept short-notice requests (within 24 hours)
          </Label>
        </div>
      </div>
    </>
  );
};

export default TutorFormFields;
