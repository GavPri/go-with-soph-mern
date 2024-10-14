import React from "react";
import Skeleton from "react-loading-skeleton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogCardSkeleton = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Skeleton height={320} />
        <Card.Body>
          <Card.Title>
            <Skeleton />
          </Card.Title>
          <Card.Text>
            <Skeleton count={3} />
          </Card.Text>
          <p>
            <Skeleton width={50} />
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCardSkeleton;
