import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import StarRating from './StarRating';

type PublishCardProps = {
  name: string;
  age: number;
  ubication: string;
  rate: number;
  descriptionTitle: string;
  description: string;
  publishDate: string;
};

export default function PublishCard(props: PublishCardProps) {
  const { name, age, ubication, rate, descriptionTitle, description, publishDate } = props;
  return (
    <div className="border-3 mb-4 flex w-4/5 flex-col rounded-3xl bg-my-gray p-8 shadow-lg">
      <div className="flex items-center gap-6 lg:items-start">
        <div className="hidden h-20 w-20 rounded-full bg-gray-200 lg:block"></div>
        <div className="lg:w-4/5">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="font-semibold text-black/50">{`${age} años`}</p>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faLocationDot} className="text-secondary-green"></FontAwesomeIcon>
            <p className="font-semibold text-black/50">{ubication}</p>
          </div>
          <StarRating rate={rate} />
          <div className="pb-4 pt-4">
            <h3 className="text-xl font-semibold text-primary-green">{descriptionTitle}</h3>
            <p className="text-justify text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <span className="self-start text-xs text-black/50 lg:self-auto">{publishDate}</span>
        <div className="flex justify-center gap-3 lg:justify-end">
          <Button text={'Ver perfil'} size={'w-36'} variant={'primary'}></Button>
          <Button text={'Me interesa'} size={'w-36'} variant={'quaternary'}></Button>
        </div>
      </div>
    </div>
  );
}
