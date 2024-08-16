// import React, { useState, useEffect, useMemo } from "react";
// import "./Advisior.css";
// import member1 from "../../members/person.png";

// const Advisior = () => {
//   const membersArr = useMemo(
//     () => [
//       { id: 1, name: "Person1", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 2, name: "Person2", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 3, name: "Person3", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 4, name: "Person4", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 5, name: "Person5", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 6, name: "Person6", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },     
//     ],
//     []
//   );

//   const [startIndex, setStartIndex] = useState(0);
//   const [visibleMembers, setVisibleMembers] = useState([]);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setStartIndex((prevIndex) =>
//         prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [membersArr]);

//   useEffect(() => {
//     const endIndex =
//       startIndex + 3 < membersArr.length ? startIndex + 3 : membersArr.length;
//     setVisibleMembers([
//       ...membersArr.slice(startIndex, endIndex),
//       ...(endIndex === membersArr.length
//         ? membersArr.slice(0, 3 - (membersArr.length - startIndex))
//         : []),
//     ]);
//   }, [startIndex, membersArr]);

//   return (
//     <div className="agenda section" id="agenda">
//       <div className="agenda-content container">
//         <div className="section-header">
//           <div className="sub-title">ADVISIORS</div>
//           <div className="title">Trace.IT 2K24</div>
//         </div>
//       <div className="members-container">
//           <div className="members-wrapper">
//             {visibleMembers.map((member) => (
//               <div className="members-slide" key={member.id}>
//                 <img src={member.image} alt={member.name} />
//                 <p>{member.name}</p>
//                 <div className="cta-buttons">
//                     <div className="tertiary-btn">
//                         <a href={member.whatsappLink}>WhatsApp &gt;</a>
//                 </div>
//               </div>
//             </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Advisior;


import React, { useState, useEffect, useMemo } from "react";
import "./Advisior.css";
import member1 from "../../members/person.png";

const Advisior = () => {
  const membersArr = useMemo(
    () => [
      {
        id: 1,
        name: "Person1",
        image: member1,
        whatsappLink: "https://wa.me/+91XXXXX",
      },
      {
        id: 2,
        name: "Person2",
        image: member1,
        whatsappLink: "https://wa.me/+91XXXXX",
      },
      {
        id: 3,
        name: "Person3",
        image: member1,
        whatsappLink: "https://wa.me/+91XXXXX",
      },
      {
        id: 4,
        name: "Person4",
        image: member1,
        whatsappLink: "https://wa.me/+91XXXXX",
      },
      {
        id: 5,
        name: "Person5",
        image: member1,
        whatsappLink: "https://wa.me/+91XXXXX",
      },
      {
        id: 6,
        name: "Person6",
        image: member1,
        whatsappLink: "https://wa.me/+91XXXXX",
      },
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!isInteracting) {
        setStartIndex((prevIndex) =>
          prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [membersArr, isInteracting]);

  useEffect(() => {
    const endIndex =
      startIndex + 3 < membersArr.length ? startIndex + 3 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 3 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  const handleScroll = () => {
    setIsInteracting(true);
  };

  const handleMouseOver = () => {
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? membersArr.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === membersArr.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ADVISIORS</div>
          <div className="title"><span class="traceDes">TRACE</span>.IT 2K24</div>
        </div>
        <div
          className="members-container"
          onScroll={handleScroll}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className="members-wrapper">
            {visibleMembers.map((member) => (
              <div className="members-slide" key={member.id}>
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
                <div className="cta-buttons">
                  <div className="tertiary-btn">
                    <a href={member.whatsappLink}>WhatsApp &gt;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-buttons">
            <button className="prev" onClick={handlePrev}>
              &lt; Prev
            </button>
            <button className="next" onClick={handleNext}>
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisior;

