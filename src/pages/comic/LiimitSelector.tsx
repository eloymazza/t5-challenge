import React from 'react';
import styles from './LiimitSelector.module.css';

type Props = {
    onChange: (value: string) => void;
};

const LiimitSelector = ({ onChange }: Props) => {
    return (
        <div className={styles.limitSelectorContainer}>
            <label>Cantidad de resultados</label>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </select>
        </div>
    );
};

export default LiimitSelector;
