import React, { createContext, useContext, useState } from 'react';

type GoalContextData = {
  goal: GoalProps[];
  //REMOVER ESSA DESGRACA AQUI
  goalValue: number;
  handleSetGoal: (goal: GoalProps) => void;
  //REMOVER ESSA DESGRACA AQUI
  handleGoalValue: (value: number) => void;
  getGoal: () => GoalProps[];
};

type GoalProps = {
  image: string;
  name: string;
  portion: number;
  value: number;
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
  //REMOVER ESSA DESGRACA AQUI
  const [goalValue, setGoalValue] = useState<number>(0);

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

  return (
    <GoalContext.Provider
      value={{ goal, handleSetGoal, getGoal, goalValue, handleGoalValue }}
    >
      {children}
    </GoalContext.Provider>
  );
};
