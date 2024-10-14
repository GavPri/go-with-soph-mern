import React from "react";
import Skeleton from "react-loading-skeleton";
import Card from "react-bootstrap/Card";

const BlogCardSkeleton = ({ cards }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="row w-3/4">
        {" "}
        {Array(cards)
          .fill(0)
          .map((_, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <Card className="h-100 text-text bg-bg w-full">
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
                    <Skeleton width={50} />
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        ;
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
