import { FC } from 'react';

type AttributionProps = {
  company: string;
  name: string;
  position: string;
};

type QuotedImageProps = AttributionProps & {
  text: string;
};

export const QuotedImage: FC<QuotedImageProps> = ({
  company,
  name,
  position,
  text,
}) => {
  return (
    <section>
      {company}
      <br />
      {name}
      <br />
      {position}
      <br />
      {text}
    </section>
  );
};
