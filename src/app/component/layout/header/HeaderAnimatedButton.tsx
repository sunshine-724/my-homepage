import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

const MotionButton = motion(Button);

interface MotionButtonProps {
  page: string;
  index: number;
  router: ReturnType<typeof useRouter>;
  handlePageTransition: (pageNumber: number,router: ReturnType<typeof useRouter>) => void;
};

export const HeaderAnimatedButton: React.FC<MotionButtonProps> = ({
  page,
  index,
  router,
  handlePageTransition,
}) => {
  return (
    <MotionButton
      key={page}
      onClick={() => handlePageTransition(index,router)}
      // framer-motion で指定するアニメーション
      whileHover={{
        scale: 1.2,
        backgroundColor: '#30C0C0', // 例: ボタンの背景色を変える
      }}
      whileTap={{
        scale: 1.2,
        backgroundColor: '#30C0C0', // 例: ボタンの背景色を変える
      }}
      transition={{ type: 'spring', stiffness: 300 }}
      sx={{
        my: 2,
        color: 'white',
        display: 'block',
        fontSize: '1.5rem',
        flexGrow: 1,
        textAlign: 'center',
        // ↑ 通常時の MUI スタイルはここへ書く
      }}
    >
      {page}
    </MotionButton>
  );
};

export default HeaderAnimatedButton;