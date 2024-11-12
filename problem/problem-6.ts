{

    
    interface Profile {
        name: string;
        age: number;
        email: string;
      }
      
      function updateProfile(
        profile: Profile,
        update: Partial<Profile>
      ): Profile {
        const updatedProfile: Profile = { ...profile };
      
        for (let key in update) {
          if (update[key as keyof Profile] !== undefined) {
          
            (updatedProfile as any)[key] = update[key as keyof Profile];
          }
        }
      
        return updatedProfile;
      }
      
      let myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
      console.log(updateProfile(myProfile, { age: 76 }));
      
}