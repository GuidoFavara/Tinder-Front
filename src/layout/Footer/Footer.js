import React from 'react';
import Rewind from '../../components/actions/Rewind';
import Dislike from '../../components/actions/Dislike';
import Like from '../../components/actions/Like';
import Superlike from '../../components/actions/Superlike';
import '../../App.css';

export const Footer = ({ person, modifySuperficialChoices }) => (
  <div id="footer">
  <Rewind userId={person.id} />
    <Dislike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Superlike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
/>
  </div>
);

export default Footer;
