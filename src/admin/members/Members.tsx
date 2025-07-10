import { useState, useEffect } from "react";

type Member = {
  firstName: string;
  lastName: string;
};

export function Members() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000").then(async (response) => {
      const members = await response.json();
      setMembers(members);
    });
  });

  return (
    <>
      <section aria-labelledby="members-heading">
        <h2 id="members-heading">Members</h2>

        <ul aria-label="Members list" data-testid="members-list">
          {members.map((member: Member, index: number) => (
            <li key={index}>
              <span>{member.firstName}</span>
              <span>{member.lastName}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
