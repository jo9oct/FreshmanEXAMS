// // src/components/ui/TeamToggle.tsx

// import React, { useState, createContext } from 'react';
// import Header from '../Header';

// // Create context with both theme state and the toggle function
// export const UserContext = createContext<{
//   toggleLight: boolean;
//   LightDark: () => void;
// }>({
//   toggleLight: false,
//   LightDark: () => {},
// });

// const TeamToggle: React.FC = () => {
//   const savedTeam = localStorage.getItem('Team');
//   const initialToggle = savedTeam === null ? false : savedTeam === 'true';

//   const [toggleLight, setToggleLight] = useState<boolean>(initialToggle);

//   const LightDark = () => {
//     const newToggle = !toggleLight;
//     setToggleLight(newToggle);
//     localStorage.setItem('Team', newToggle.toString());
//   };

//   return (
//     <UserContext.Provider value={{ toggleLight, LightDark }}>
//       <Header />
//     </UserContext.Provider>
//   );
// };

// export default TeamToggle;
