import React from "react";
import Skeleton from "react-loading-skeleton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogCardSkeleton = () => {
  return (
    <div className="col-md-4 mb-4">
      <Card className="h-100 text-text bg-bg">
        <Skeleton height={250} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>
            <Skeleton />
          </Card.Title>
          <Card.Text>
            <div className="d-flex flex-wrap mb-2">
              <div className="rounded bg-light border text-brand px-2 py-1 mr-2 mb-2">
                <Skeleton width={60} count={3} />
              </div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Skeleton width={50} />
              <span className="ml-1">
                <Skeleton />
              </span>
            </div>
          </Card.Text>
          <div className="mt-auto">
              <Skeleton width={50}/>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCardSkeleton;
