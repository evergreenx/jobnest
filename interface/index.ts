export interface JobPosting {
    employer_company_type: string;
    employer_logo: string;
    employer_name: string;
    employer_website: string;
    job_apply_is_direct: boolean;
    job_apply_link: string;
    job_apply_quality_score: number;
    job_benefits: string[];
    job_city: string;
    job_country: string;
    job_description: string;
    job_employment_type: string;
    job_experience_in_place_of_education: boolean;
    job_google_link: string;
    job_highlights: {
      Qualifications: string[];
      // Add more properties if needed
    };
    job_id: string;
    job_is_remote: boolean;
    job_job_title: string;
    job_latitude: number;
    job_longitude: number;
    job_max_salary: null | number; // Update this with the actual type if necessary
    job_min_salary: null | number; // Update this with the actual type if necessary
    job_naics_code: string;
    job_naics_name: string;
    job_offer_expiration_datetime_utc: string;
    job_offer_expiration_timestamp: number;
    job_onet_job_zone: string;
    job_onet_soc: string;
    job_posted_at_datetime_utc: string;
    job_posted_at_timestamp: number;
    job_posting_language: string;
    job_publisher: string;
    job_required_education: {
      postgraduate_degree: boolean;
      professional_certification: boolean;
      high_school: boolean;
      // Add more properties if needed
    };
    job_required_experience: {
      no_experience_required: boolean;
      required_experience_in_months: number;
      experience_mentioned: boolean;
      // Add more properties if needed
    };
    job_required_skills: string[] | null;
    job_salary_currency: string | null;
    job_salary_period: string | null;
    job_state: string;
    job_title: string;
  }
