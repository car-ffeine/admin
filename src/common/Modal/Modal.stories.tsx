import Button from '@mui/material/Button';
import type { Meta } from '@storybook/react';

import { useState } from 'react';

import Modal from './Modal';

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>모달 열기</Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod ultrices elit vitae
          pharetra. Vestibulum volutpat molestie viverra. Pellentesque libero mauris, tristique et
          tortor luctus, volutpat aliquet urna. Nunc ut urna enim. Morbi maximus, mi ac sollicitudin
          fermentum, massa nunc dapibus est, in pellentesque lacus est in massa. Curabitur et
          elementum metus, non hendrerit est. Curabitur venenatis id leo in dapibus. Duis in ipsum
          quis enim aliquam ornare. Cras in elementum augue. Donec tincidunt nisi nec neque maximus
          eleifend. Donec finibus vitae magna ut volutpat. Mauris vitae finibus eros, nec
          sollicitudin mi. Cras vitae nisi vel mi consequat sagittis. Nulla eget arcu vel velit
          sodales venenatis in eu arcu. Duis et cursus nisl, ac fermentum enim. Ut posuere bibendum
          ligula eu sagittis. Curabitur imperdiet rhoncus leo, nec faucibus eros tempus vel.
          Pellentesque ut eros in mi porta ultricies. Mauris viverra dolor sit amet enim elementum,
          eu consectetur dui interdum. Donec in malesuada nisi, vitae congue lorem. Sed lacinia ante
          arcu, quis hendrerit mauris condimentum ac. Pellentesque non dapibus justo, sit amet
          sollicitudin nibh. Quisque vitae lorem sed lorem rutrum elementum sed sed tortor. Proin
          fermentum tellus sed iaculis aliquam. Suspendisse in quam non dui varius dictum sit amet
          et nisi. In facilisis neque arcu, a mattis felis aliquam non. Sed id nisl non tortor
          placerat interdum et sit amet ipsum. Aliquam volutpat sed nisl sit amet blandit. Ut sit
          amet lacus nibh. Aliquam tristique, tortor a bibendum mollis, nunc magna dictum purus,
          venenatis mattis orci quam in lorem. Fusce suscipit pretium nunc, id egestas magna dapibus
          sed. Nam quis felis quis mauris condimentum consectetur tristique id lacus. Aliquam sed
          dui vel nulla consequat iaculis. Praesent feugiat quam in accumsan laoreet. Aliquam cursus
          arcu neque, porta fringilla urna suscipit eleifend. Ut rutrum erat eu mauris eleifend
          ultricies vitae ac tortor. Suspendisse consequat aliquet mi imperdiet gravida. Vivamus
          iaculis urna mauris, ac efficitur ligula aliquet suscipit. Mauris accumsan laoreet nisi,
          eu suscipit mauris interdum imperdiet. Donec viverra libero sit amet leo mollis, eget
          pulvinar ligula lobortis. Nullam nec viverra lorem. Duis faucibus odio enim, vel finibus
          neque sollicitudin a. Phasellus venenatis viverra ex, ac tempor ante. In egestas erat vel
          nisl dictum ornare. Aliquam ultricies purus turpis, a faucibus quam feugiat vel. Duis at
          elementum sem. Proin condimentum, quam eu consequat posuere, leo nibh commodo eros, at
          suscipit diam diam non urna. Ut mollis ultricies diam, a tempus nisl mollis at.
        </p>
      </Modal>
    </>
  );
};
