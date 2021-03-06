import React from "react";
import PropTypes from "prop-types";

export default function MovieItem({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

MovieItem.propTypes = {
    coverImg: PropTypes.string.isRequired,
    titile: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
