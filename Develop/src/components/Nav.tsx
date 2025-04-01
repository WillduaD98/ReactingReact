import { navStyle } from "../App";
import { useState } from 'react';

type cardProfile = {
  styles: navStyle,
};

const Nav = ({ styles }: cardProfile) => {
  const [hovered, setHovered] = useState<string | null>(null);

  // Managging Events Mouse for Hover with UseState
  const handleMouseEnter = (id: string) => setHovered(id);
  const handleMouseLeave = () => setHovered(null);

  const getButtonStyle = (id: string): React.CSSProperties => ({
    ...styles.buttons,
    ...(hovered === id ? styles.hoverStyle : {}),
  });

  return (
    <section style={styles.marginsPadd}>
      <nav style={styles.nav}>
        <a
          style={getButtonStyle('home')}
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </a>

        <a
          style={getButtonStyle('candidates')}
          onMouseEnter={() => handleMouseEnter('candidates')}
          onMouseLeave={handleMouseLeave}
        >
          Potential Candidates
        </a>
      </nav>
    </section>
  );
};

export default Nav;
