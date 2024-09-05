import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import styles from './CourseDetails.module.css';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
    const [isVideoListVisible, setIsVideoListVisible] = useState(true);
    const [activeTab, setActiveTab] = useState('details');

    useEffect(() => {
        axios.get(`http://localhost:9090/api/courses/${id}`)
            .then(response => {
                setCourse(response.data);
                if (response.data.videos.length > 0) {
                    setSelectedVideo(response.data.videos[0]);
                }
            })
            .catch(error => {
                console.error("Error fetching course details:", error);
            });
    }, [id]);

    useEffect(() => {
        if (course && course.videos.length > 0) {
            setSelectedVideo(course.videos[0]);
        }
    }, [course]);

    const handleVideoClick = (video) => {
        console.log('Selected Video:', video);
        setSelectedVideo(video);
    };

    const toggleDetails = () => {
        setIsDetailsVisible(prev => !prev);
    };

    const toggleVideoList = () => {
        setIsVideoListVisible(prev => !prev);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    if (!course) return <div>Loading...</div>;

    return (
        <div className={styles.courseDetails}>
            <div className={styles.mainContent}>
                <div className={`${styles.videoPlayerContainer} ${!isVideoListVisible ? styles.fullWidth : ''}`}>
                    {selectedVideo && (
                        <VideoPlayer
                            videoSrc={`http://localhost:9090/api/videos/stream?fileName=${encodeURIComponent(selectedVideo.filePath)}`}
                        />
                    )}
                </div>
                {!isVideoListVisible && (
                    <div
                        className={styles.showArrow}
                        onClick={toggleVideoList}
                    >
                        <span className={styles.arrow}>&#9664;</span>
                        <span className={styles.arrowText}>Course Content</span>
                    </div>
                )}
                <div className={styles.detailsContainer}>
                    <button className={styles.toggleButton} onClick={toggleDetails}>
                        {isDetailsVisible ? 'Hide Details' : 'Show Details'}
                    </button>
                    {isDetailsVisible && (
                        <>
                            <div className={styles.tabs}>
                                <button
                                    className={`${styles.tab} ${activeTab === 'details' ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange('details')}
                                >
                                    Course Details
                                </button>
                                <button
                                    className={`${styles.tab} ${activeTab === 'assignments' ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange('assignments')}
                                >
                                    Assignments
                                </button>
                                <button
                                    className={`${styles.tab} ${activeTab === 'quizzes' ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange('quizzes')}
                                >
                                    Quizzes
                                </button>
                            </div>
                            <div className={styles.tabContent}>
                                {activeTab === 'details' && (
                                    <div>
                                        <h2>Course Details</h2>
                                        <p><strong>Title:</strong> {course.title}</p>
                                        <p><strong>Description:</strong> {course.description}</p>
                                        <p><strong>Category:</strong> {course.category?.name}</p>
                                        <p><strong>PDF Name:</strong> {course.pdfName}</p>
                                        <p><strong>PDF Type:</strong> {course.pdfType}</p>
                                    </div>
                                )}
                                {activeTab === 'assignments' && (
                                    <div>
                                        <h2>Assignments</h2>
                                        <ul>
                                            {course.assignments.map(assignment => (
                                                <li key={assignment.id}>{assignment.title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 'quizzes' && (
                                    <div>
                                        <h2>Quizzes</h2>
                                        <ul>
                                            {course.quizzes.map(quiz => (
                                                <li key={quiz.id}>{quiz.title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
            {isVideoListVisible && (
                <div className={styles.videoListContainer}>
                    <button className={styles.toggleButton} onClick={toggleVideoList}>
                        Hide Course Content
                    </button>
                    <div>
                        <h3 style={{
                            backgroundColor: "#444",
                            margin: "10px 0",
                            textAlign: "center",
                            borderRadius: "10px"
                        }}>Course Content</h3>
                        <ul className={styles.videoList}>
                            {course.videos && course.videos.length > 0 ? (
                                course.videos.map(video => (
                                    <li
                                        key={video.id}
                                        className={`${styles.videoItem} ${selectedVideo?.id === video.id ? styles.selected : ''}`}
                                        onClick={() => handleVideoClick(video)}
                                    >
                                        {video.title}
                                    </li>
                                ))
                            ) : (
                                <div>No videos available for this course.</div>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseDetails;
