export class modelProfileData {
  constructor(profileData) {
    this.status = parseInt(profileData.status);
    this.message = String(profileData.message);
    this.createdAt = String(profileData.body.createdAt);
    this.email = String(profileData.body.email);
    this.firstName = String(profileData.body.firstName);
    this.id = String(profileData.body.id);
    this.lastName = String(profileData.body.lastName);
    this.updatedAt = String(profileData.body.updatedAt);
  }

  formatProfileData() {
    return {
      profileData: {
        status: this.status,
        message: this.message,
        createdAt: this.createdAt,
        email: this.email,
        firstName: this.firstName,
        id: this.id,
        lastName: this.lastName,
        updatedAt: this.updatedAt,
      },
      status: this.status,
      message: this.message,
    };
  }
}
