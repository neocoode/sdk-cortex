
interface displaySentenseUserProps {
  message: string;
}

const DisplaySentenseUser: React.FC<displaySentenseUserProps> = ({ message }) => {
  return (
    <div className="flex flex-wrap text-2xl">
      {message}
    </div>
  );
};

export default DisplaySentenseUser;
