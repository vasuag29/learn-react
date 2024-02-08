function ProfileSection({profile, size=100}){
  return (
    <section className="profile">
      <h2>{profile.name}</h2>
      <img
        className="avatar"
        src={profile.imageUrl}
        alt={profile.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profile.profession}
        </li>
        <li>
          <b>Awards: {profile.awardsCount} </b>
          ({profile.awards})
        </li>
        <li>
          <b>Discovered: </b>
          {profile.discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <ProfileSection 
      profile = {{
        name: 'Maria Skłodowska-Curie',
        imageUrl: 'https://i.imgur.com/szV5sdGs.jpg',
        profession: 'physicist and chemist',
        awardsCount: 4,
        awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
        discovered: 'polonium (element)'
      }}
      size = {70}/>
      <ProfileSection 
      profile = {{
        name: 'Katsuko Saruhashi',
        imageUrl: 'https://i.imgur.com/YfeOqp2s.jpg',
        profession: 'geochemist',
        awardsCount: 2,
        awards: 'Miyake Prize for geochemistry, Tanaka Prize',
        discovered: 'a method for measuring carbon dioxide in seawater'
      }}
      size = {70}/>
    </div>
  );
}
