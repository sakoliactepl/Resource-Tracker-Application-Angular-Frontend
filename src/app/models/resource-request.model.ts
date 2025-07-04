
export interface CreateResourceRequest {
    empId?: string;                  // Optional - generated by backend
    name: string;                    // Full name
    designation: string;            // Role/Title
    reportingTo: string;            // Manager/Supervisor
    isBillable: boolean;            // Billable status
    skills: string[];               // List of skills/technologies
    projectAllocation: string;      // Current assigned project
    location: string;               // Work location
    email: string;                  // Official email
    dateOfJoining: string;          // Date in ISO format (e.g. '2024-01-01')
    remarks: string;
};

export interface UpdateResourceRequest extends CreateResourceRequest {
    empId: string;
};
