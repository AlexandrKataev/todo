import { FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  loading?: boolean;
}

export const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <ClipLoader
      color={'var(--color-main)'}
      loading={loading === undefined ? true : loading}
      cssOverride={{
        position: 'absolute',
        top: '45vh',
      }}
      size={50}
      speedMultiplier={0.5}
    />
  );
};
