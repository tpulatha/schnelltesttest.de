import React from 'react';
import { Link } from 'react-router-dom';

export function NoPermissionsModal(): JSX.Element {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        padding: '2em',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontWeight: 'bold' }}>
        Leider konnten wir keinen Zugriff auf deine Kamera bekommen. Bitte erlaube diesen Zugriff,
        damit du deinen Code scannen kannst oder{' '}
        <Link to={'/search'}>gib den Code selbst ein.</Link>
      </div>
    </div>
  );
}
