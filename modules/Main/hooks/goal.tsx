import React, { createContext, useContext, useState } from 'react';

type GoalContextData = {
  goal: GoalProps[];
  //REMOVER ESSA DESGRACA AQUI
  goalValue: number;
  handleSetGoal: (goal: GoalProps) => void;
  //REMOVER ESSA DESGRACA AQUI
  handleGoalValue: (value: number) => void;
  getGoal: () => GoalProps[];
  getGoalName: () => string;
  getPortion: () => number;
  getImage: () => string;
  getGoalFinalValue: () => number;
  setGoalName: (name: string) => void;
  setPortion: (portion: number) => void;
  setImage: (image: string) => void;
  setGoalFinalValue: (value: number) => void;
  setIdGoal: (id: number) => void;
  getIdGoal: () => number;
};

type GoalProps = {
  id_meta: number;
  url_image: string;
  nome: string;
  numero_parcela: number;
  valor: number;
};

const GoalContext = createContext<GoalContextData>({} as GoalContextData);

export function useGoal(): GoalContextData {
  const context = useContext(GoalContext);

  if (!context) {
    throw new Error('useGoal must be used within a GoalProvider');
  }

  return context;
}

export const GoalProvider: React.FC = ({ children }) => {
  const [goal, setGoal] = useState<GoalProps[]>([]);
  const [goalName, setGoalName] = useState<string>('');
  const [portion, setPortion] = useState(0);
  const [image, setImage] = useState('');
  const [goalFinalValue, setGoalFinalValue] = useState(0);
  //REMOVER ESSA DESGRACA AQUI
  const [goalValue, setGoalValue] = useState<number>(0);
  const [idGoal, setIdGoal] = useState<number>(0);

  function handleSetGoal(newGoal: GoalProps) {
    setGoal([...goal, newGoal]);
  }
  //REMOVER ESSA DESGRACA AQUI
  function handleGoalValue(value: number) {
    setGoalValue(value);
  }

  function getGoal() {
    return goal;
  }

  function getGoalName() {
    return goalName;
  }

  function getIdGoal() {
    return idGoal;
  }

  function getPortion() {
    return portion;
  }

  function getImage() {
    return image;
  }

  function getGoalFinalValue() {
    return goalFinalValue;
  }

  return (
    <GoalContext.Provider
      value={{
        goal,
        handleSetGoal,
        getGoal,
        goalValue,
        handleGoalValue,
        getGoalName,
        getGoalFinalValue,
        getImage,
        getPortion,
        setGoalFinalValue,
        setGoalName,
        setImage,
        setPortion,
        setIdGoal,
        getIdGoal,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};
